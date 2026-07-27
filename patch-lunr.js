const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'node_modules', 'lunr-languages', 'lunr.vi.js');

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  if (!content.includes("lunr.Pipeline.registerFunction(lunr.vi.stopWordFilter, 'stopWordFilter-vi');")) {
    console.log('Patching lunr-languages/lunr.vi.js to register stopWordFilter-vi...');
    content = content.replace(
      "lunr.vi.stopWordFilter = lunr.generateStopWordFilter('là cái nhưng mà'.split(' '));",
      "lunr.vi.stopWordFilter = lunr.generateStopWordFilter('là cái nhưng mà'.split(' '));\n    lunr.Pipeline.registerFunction(lunr.vi.stopWordFilter, 'stopWordFilter-vi');"
    );
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Patch applied successfully.');
  } else {
    console.log('lunr-languages/lunr.vi.js is already patched.');
  }
} else {
  console.warn('Warning: lunr-languages/lunr.vi.js not found. Cannot patch.');
}
