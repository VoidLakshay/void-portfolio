const fs = require('fs');
const file = 'src/components/sections/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ambient glow
content = content.replace('bg-blue-900/10', 'bg-blue-500/10 dark:bg-blue-900/10');

// text-zinc-400
content = content.replace('text-zinc-400 text-lg', 'text-zinc-600 dark:text-zinc-400 text-lg');

// Inputs bg
content = content.replace(/bg-zinc-900\/50/g, 'bg-black/5 dark:bg-zinc-900/50');

// Inputs border-foreground/5
content = content.replace(/border border-foreground\/5/g, 'border border-black/5 dark:border-white/5');

// focus rings
content = content.replace(/focus:ring-white\/20/g, 'focus:ring-black/10 dark:focus:ring-white/20');
content = content.replace(/focus:border-foreground\/20/g, 'focus:border-black/20 dark:focus:border-white/20');

// Send Message hover
content = content.replace(/hover:bg-zinc-200/g, 'hover:bg-zinc-800 dark:hover:bg-zinc-200');

// View Resume button
content = content.replace(/bg-zinc-800/g, 'bg-zinc-200 dark:bg-zinc-800');
content = content.replace(/border border-foreground\/10/g, 'border border-black/10 dark:border-white/10');
content = content.replace(/hover:bg-zinc-700/g, 'hover:bg-zinc-300 dark:hover:bg-zinc-700');

fs.writeFileSync(file, content);
console.log('Fixed Contact.tsx');
