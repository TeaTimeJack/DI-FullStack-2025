
const fs = require('fs');

fs.readFile('./source.txt','utf-8',(err1,data) =>{
    try {
        fs.writeFile('./destination.txt',data,'utf-8',err2 =>{
            if (err2) {
                console.log(err2.message);
                return
            }
        })
    } catch (err1) {
        console.log(err1.message);
        return
    }
})