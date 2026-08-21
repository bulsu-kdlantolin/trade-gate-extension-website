const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

walk('./src').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import React, \{([^}]+)\} from 'react';/, "import { $1 } from 'react';");
  content = content.replace(/import React from 'react';\n?/, "");
  fs.writeFileSync(file, content);
});
console.log("Removed unused React imports");
