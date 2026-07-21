const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace text-white with text-foreground
      content = content.replace(/text-white/g, 'text-foreground');
      
      // Replace hover:text-white with hover:text-foreground
      content = content.replace(/hover:text-white/g, 'hover:text-foreground');
      
      // Replace border-white/ with border-foreground/
      content = content.replace(/border-white\//g, 'border-foreground/');
      
      // Replace bg-white text-black with bg-foreground text-background
      content = content.replace(/bg-white text-black/g, 'bg-foreground text-background');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('src/components/sections');
console.log('Replaced hardcoded theme classes in sections.');
