const fs = require('fs');


function readFile(filePath) {
    fs.readFile(filePath,'utf-8',(err,data) =>{
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(data);
    })
}

module.exports = {
    readFile
}