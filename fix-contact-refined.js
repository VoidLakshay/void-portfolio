const fs = require('fs');
let file = 'src/components/sections/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

// Inputs bg & border
content = content.replace(
  /bg-black\/5 dark:bg-zinc-900\/50 border border-black\/5/g,
  'bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200'
);

// View Resume button
content = content.replace(
  /bg-zinc-200 dark:bg-zinc-800 border border-black\/10 dark:border-white\/10 text-foreground font-semibold rounded-xl px-6 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black/g,
  'bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-foreground font-semibold rounded-xl px-6 py-4 hover:bg-zinc-200 hover:text-black dark:hover:bg-white dark:hover:text-black'
);

fs.writeFileSync(file, content);
console.log('Fixed Contact form refined');
