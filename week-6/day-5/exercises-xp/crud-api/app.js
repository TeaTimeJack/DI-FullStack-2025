const express = require('express');
const {fetchPosts} = require('./data/dataService.js');

const app = express();
const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`This app is running on port ${PORT}`);
});

const posts = fetchPosts();

app.get('/posts',(req,res) =>{
    res.json(posts);
});