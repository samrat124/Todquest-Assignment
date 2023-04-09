const fs = require('fs');
const directoryPath = '/local';
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error reading directory:', err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
