const fs = require("fs");

fs.writeFile("third-text.txt", "This is the desired content", (err) => {
  if (err) throw err;
  console.log("File created");
});
/*
fs.writeFile is an asynchronous method, that the write operation is executed in the background,
and the program continues to run without blocking. It is recommended to use fs.writeFile when
writing large amounts of data or when dealing with time-consuming file operations,
as it allows the program to continue executing while the write operation is in progress,
improving overall performance.
*/


// fs.unlink('third-text.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted');
// });
