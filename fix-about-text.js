const fs = require('fs');
const file = 'src/components/sections/About.tsx';
let content = fs.readFileSync(file, 'utf8');

// About text base
content = content.replace(
  'text-zinc-600 dark:text-zinc-300 transition-opacity',
  'text-zinc-800 dark:text-zinc-300 transition-opacity'
);

// Education 2025 - 2028 base
content = content.replace(
  'text-zinc-400 dark:text-zinc-500 dark:text-zinc-400 font-extrabold mb-1',
  'text-zinc-700 dark:text-zinc-400 font-extrabold mb-1'
);

// Education BCA base
content = content.replace(
  'text-sm font-medium text-zinc-600 dark:text-zinc-200',
  'text-sm font-medium text-zinc-800 dark:text-zinc-200'
);

// Education IITM base
content = content.replace(
  'text-zinc-400 dark:text-zinc-500 font-medium',
  'text-zinc-700 dark:text-zinc-400 font-medium'
);

// Goal text base
content = content.replace(
  'text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-[1.9] transition-opacity',
  'text-zinc-800 dark:text-zinc-300 text-sm font-medium leading-[1.9] transition-opacity'
);

fs.writeFileSync(file, content);
console.log('Fixed About text contrast');
