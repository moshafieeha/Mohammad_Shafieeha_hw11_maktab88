const fs = require('fs');

// The text to be added to the file
const newText = '\n This is the new text being added to the file.';

fs.appendFile('./text.txt', newText, (err) => {
  if (err) throw err;
  console.log('The text was added to the file!');
});
