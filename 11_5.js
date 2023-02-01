const fs = require('fs');

fs.readFile('user-data.json', 'utf-8', (err, data) => {
  if (err) throw err;
  let userData = JSON.parse(data);

  userData = userData.filter(user => user.age > 18);

  console.log('Users with age greater than 18:');
  console.log(userData);
});
