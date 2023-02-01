const fs = require('fs');

fs.access('text.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log("The desired object does not exist");
  } else {
    console.log("The desired file is available");
  }
});
