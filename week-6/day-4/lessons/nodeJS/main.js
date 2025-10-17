import axios from 'axios'

try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data);
    
} catch (error) {
    console.log(error.message);
    
}


// const obj = require('./utils')
// import {plus, minus, multi, divide} from './math/math.js'

// console.log(plus(5,2));
// console.log(divide(6,2));
// console.log(divide(6,0));

// console.log(obj);
// obj.sayHi("Anne")



// console.log("welcome Amit");

// for (let i = 0; i < 5; i++) {
//     console.log(i);  
// }

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// });


// NodeJS Module System
// ** 1. Core moduls (built in): fs, http, path, crypto and more ...
// ** const fs - require('fs') -- common syntax of nodejs...
// ** import fs from 'fs' -- ES (ecma script)

// **2. third party moduls (npm/yarn) packages to install
// ** const express - require('express') -- common syntax of nodejs...
// ** import express from 'express' -- ES (ecma script)

// **3. Local moduls (your files) math.js / db.js
// ** const db.js - require('./config/db.js')
// ** import db.js from'./config/db.js'


// ** package.json - heart of any Node.js App
//  **npm init -- create the package.json