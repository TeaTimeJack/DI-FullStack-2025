const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.log(err.message)
        return; 
    }

    files.forEach((file, i) => {
        console.log(`${i}: ${file}`);
    });
});