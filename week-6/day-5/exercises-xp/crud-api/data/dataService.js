
const axios = require('axios')

async function  fetchPosts() {

  returnPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json =>  json);
    return  returnPosts;
}

module.exports ={
    fetchPosts
}