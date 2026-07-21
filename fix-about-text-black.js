const fs = require('fs');
let file = 'src/components/sections/About.tsx';
let content = fs.readFileSync(file, 'utf8');

// About text base
content = content.replace(
  'text-zinc-800 dark:text-zinc-300 transition-opacity',
  'text-black/70 dark:text-zinc-300 transition-opacity'
);

// Education 2025 - 2028 base
content = content.replace(
  'text-zinc-700 dark:text-zinc-400 font-extrabold mb-1',
  'text-black/60 dark:text-zinc-400 font-extrabold mb-1'
);

// Education BCA base
content = content.replace(
  'text-zinc-800 dark:text-zinc-200',
  'text-black/80 dark:text-zinc-200'
);

// Education IITM base
content = content.replace(
  'text-zinc-700 dark:text-zinc-400 font-medium',
  'text-black/60 dark:text-zinc-400 font-medium'
);

// Goal text base
content = content.replace(
  'text-zinc-800 dark:text-zinc-300 text-sm font-medium leading-[1.9] transition-opacity',
  'text-black/70 dark:text-zinc-300 text-sm font-medium leading-[1.9] transition-opacity'
);

fs.writeFileSync(file, content);
console.log('Fixed About text to be black/70');
