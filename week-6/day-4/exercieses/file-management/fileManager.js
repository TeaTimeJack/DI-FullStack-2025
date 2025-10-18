import fs from 'fs';

export const readFile = (path) =>{
    fs.readFileSync(path,'utf-8',(err,data)=>{
        if (err) {
            console.log(err.message);
            return
        }
        console.log(data);
        return data
    });
}

export const writeFile = (path,content) =>{
    fs.writeFile(path,content,'utf-8',(err)=>{
        if (err) {
            console.log(err.message);
            return
        }
        console.log("the writing was succesful");
    });
}


