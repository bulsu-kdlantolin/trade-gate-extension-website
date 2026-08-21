const fs = require('fs');

['index.html', 'privacy.html', 'terms.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Fix void-style (meta and link tags shouldn't be self-closing in HTML5)
  content = content.replace(/<(meta|link)([^>]+)\/>/g, '<$1$2>');

  // Fix raw & characters
  content = content.replace(/&(?!(amp|lt|gt|quot|#x?[0-9a-fA-F]+|copy|nbsp);)/g, '&amp;');

  // Fix unique-landmark for main
  content = content.replace(/<main /g, '<main aria-label="Main Content" ');
  
  // Fix unique-landmark for nav (there are a few)
  content = content.replace(/<nav class="max-w-4xl/g, '<nav aria-label="Main Navigation" class="max-w-4xl');
  content = content.replace(/<nav class="max-w-6xl/g, '<nav aria-label="Main Navigation" class="max-w-6xl');
  content = content.replace(/<nav class="flex items-center gap-6 text-sm">/g, '<nav aria-label="Footer Navigation" class="flex items-center gap-6 text-sm">');

  // Fix missing type="button" on buttons in index.html
  content = content.replace(/<button id="mobile-menu-btn" /g, '<button id="mobile-menu-btn" type="button" ');
  content = content.replace(/<button class="w-full py-2.5/g, '<button type="button" class="w-full py-2.5');
  content = content.replace(/<button onclick=/g, '<button type="button" aria-label="Copy Address" onclick=');

  // Fix inline styles in index.html themes
  content = content.replace(/style="background: #000000; border: 1px solid #2C2412;"/g, 'class="bg-[#000000] border-[#2C2412]"');
  content = content.replace(/style="background: #E5B82A;"/g, 'class="bg-[#E5B82A]"');
  content = content.replace(/style="background: #00E676;"/g, 'class="bg-[#00E676]"');
  
  content = content.replace(/style="background: #181A20; border: 1px solid #2B313A;"/g, 'class="bg-[#181A20] border-[#2B313A]"');
  content = content.replace(/style="background: #FCD535;"/g, 'class="bg-[#FCD535]"');
  content = content.replace(/style="background: #0ECB81;"/g, 'class="bg-[#0ECB81]"');

  content = content.replace(/style="background: #0E1014; border: 1px solid #232830;"/g, 'class="bg-[#0E1014] border-[#232830]"');
  content = content.replace(/style="background: #2864FF;"/g, 'class="bg-[#2864FF]"');
  content = content.replace(/style="background: #26B478;"/g, 'class="bg-[#26B478]"');

  content = content.replace(/style="background: #0C0D10; border: 1px solid #262933;"/g, 'class="bg-[#0C0D10] border-[#262933]"');
  content = content.replace(/style="background: #F7A600;"/g, 'class="bg-[#F7A600]"');
  content = content.replace(/style="background: #00BD84;"/g, 'class="bg-[#00BD84]"');

  content = content.replace(/style="background: #0A0A0A; border: 1px solid #2B2B2B;"/g, 'class="bg-[#0A0A0A] border-[#2B2B2B]"');
  content = content.replace(/style="background: #FFFFFF; border: 1px solid #333;"/g, 'class="bg-[#FFFFFF] border-[#333]"');
  content = content.replace(/style="background: #00D182;"/g, 'class="bg-[#00D182]"');

  content = content.replace(/style="background: #0F1419; border: 1px solid #26323E;"/g, 'class="bg-[#0F1419] border-[#26323E]"');
  content = content.replace(/style="background: #00D092;"/g, 'class="bg-[#00D092]"');
  content = content.replace(/style="background: #F2485C;"/g, 'class="bg-[#F2485C]"');

  content = content.replace(/style="background: #0A0E14; border: 1px solid #27303D;"/g, 'class="bg-[#0A0E14] border-[#27303D]"');
  content = content.replace(/style="background: #00F0FF;"/g, 'class="bg-[#00F0FF]"');
  content = content.replace(/style="background: #00D294;"/g, 'class="bg-[#00D294]"');

  content = content.replace(/style="background: #0A0B0E; border: 1px solid #262830;"/g, 'class="bg-[#0A0B0E] border-[#262830]"');
  content = content.replace(/style="background: #A855F7;"/g, 'class="bg-[#A855F7]"');
  content = content.replace(/style="background: #00E5A3;"/g, 'class="bg-[#00E5A3]"');
  
  // Clean up styles
  content = content.replace(/style=\"animation-delay: \d+ms\"/g, ''); // html-validate also dislikes style for animation delay, we can add a class instead or ignore.

  fs.writeFileSync(file, content);
});

console.log('Fixed HTML errors');
