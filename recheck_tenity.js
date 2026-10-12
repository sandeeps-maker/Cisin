const fs = require('fs');
const code = fs.readFileSync('tenity_app.js', 'utf8');

// Print the exact gradient data definitions
const idx = code.indexOf('gradient1b_data');
console.log('=== gradient1b_data ===');
console.log(code.slice(idx, idx + 1200));
