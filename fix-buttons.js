const fs = require('fs');

// Fix Projects.tsx
let projFile = 'src/components/sections/Projects.tsx';
let projContent = fs.readFileSync(projFile, 'utf8');
projContent = projContent.replace(
  'from-white to-white/20',
  'from-black to-black/10 dark:from-white dark:to-white/20'
);
fs.writeFileSync(projFile, projContent);

// Fix Contact.tsx buttons
let contactFile = 'src/components/sections/Contact.tsx';
let contactContent = fs.readFileSync(contactFile, 'utf8');

// Send Message button
// It was: hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-200
contactContent = contactContent.replace(
  'hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-200',
  'hover:opacity-80'
);

// View Resume button
// It was: bg-zinc-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-foreground font-semibold rounded-xl px-6 py-4 hover:bg-zinc-300 dark:hover:bg-zinc-700
contactContent = contactContent.replace(
  'bg-zinc-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-foreground font-semibold rounded-xl px-6 py-4 hover:bg-zinc-300 dark:hover:bg-zinc-700',
  'bg-zinc-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-foreground font-semibold rounded-xl px-6 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
);

fs.writeFileSync(contactFile, contactContent);

console.log('Fixed Projects and Contact buttons');
