const fs = require('fs');
const file = 'src/components/sections/About.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('from-black via-black/80', 'from-background via-background/80');

// Replace exact matches to avoid double replacement
const replacements = [
  ['text-zinc-200', 'text-zinc-600 dark:text-zinc-200'],
  ['text-zinc-300', 'text-zinc-600 dark:text-zinc-300'],
  ['text-zinc-700', 'text-zinc-300 dark:text-zinc-700'],
  ['text-zinc-100', 'text-zinc-900 dark:text-zinc-100'],
  ['text-zinc-400', 'text-zinc-500 dark:text-zinc-400'],
  ['text-zinc-500', 'text-zinc-400 dark:text-zinc-500']
];

// Instead of string replace, we'll parse words so we don't accidentally replace dark:text-zinc-400 again
for (const [search, replace] of replacements) {
  const regex = new RegExp(`(?<!dark:)${search}`, 'g');
  content = content.replace(regex, replace);
}

fs.writeFileSync(file, content);
console.log('Fixed About.tsx');
