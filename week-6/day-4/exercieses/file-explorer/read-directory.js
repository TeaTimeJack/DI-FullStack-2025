const fs = require('fs');
const path = require('path');

const directoryPath = path.join('file-explorer', '.');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log(err.message)
        return; 
    }

    files.forEach((file, i) => {
        console.log(`${i}: ${file}`);
    });
});