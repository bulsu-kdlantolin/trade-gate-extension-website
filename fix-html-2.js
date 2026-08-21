const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
// Merge consecutive class attributes
content = content.replace(/class="([^"]+)"\s+class="([^"]+)"/g, 'class="$1 $2"');
// Fix self-closing br tags
content = content.replace(/<br\/>/g, '<br>');
fs.writeFileSync('index.html', content);
console.log('Fixed index.html issues');
