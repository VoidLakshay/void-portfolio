const fs = require('fs');
let txt = fs.readFileSync('src/components/ui/theme-toggle.tsx', 'utf8');
txt = txt.replace(/\\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync('src/components/ui/theme-toggle.tsx', txt);
console.log('Fixed escaped backticks');
