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

// function readFile(filePath) {
//     try {
//         return fs.readFile(filePath,'utf-8',(err,data) =>{
//             if (err) {
//                 console.log(err.message);
//                 return;
//             }
//             console.log(data);
//         })
//     } catch (error) {
        
//     }
    
// }



module.exports = {
    readFile
}