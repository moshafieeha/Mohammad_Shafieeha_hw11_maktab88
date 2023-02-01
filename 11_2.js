const fs = require('fs');

// Create the "text.txt" file with the content "hello world"
fs.writeFileSync('./second-text.txt', 'hello world');
/*
fs.writeFileSync is a synchronous method, that the program execution blocks until
the write operation is complete. It is useful when you need to write and ensure that
the write operation is complete before moving on to the next task.
*/


// Add additional text to the end of the file
fs.appendFileSync('./second-text.txt', '\nThis is additional text.');


console.log('Hello, World!');
