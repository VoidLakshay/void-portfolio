const fs = require('fs');
let file = 'src/components/sections/About.tsx';
let content = fs.readFileSync(file, 'utf8');

// Dim layers (hover)
content = content.replace(
  /text-zinc-300 dark:text-zinc-700/g,
  'text-black/30 dark:text-zinc-700'
);

// Bright layers (hover)
content = content.replace(
  /text-zinc-900 dark:text-zinc-100/g,
  'text-black dark:text-zinc-100'
);

fs.writeFileSync(file, content);
console.log('Fixed About hover layers to use black/30 and black');
