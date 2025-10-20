const express = require("express");

const app = express();

const PORT = 3002
app.listen(PORT, () =>{
    console.log(`Run on ${PORT}`);
});

/* body-parser (npm package - includs in express at V5+*/ 
app.use(express.json());

const data = [
    {
        id:1,
        title: "Amaizing!",
        content: "A man jumped off a building and survaived"
    },
    {
        id:2,
        title: "Noo!",
        content: "Parking tickets are expensive!"
    },
    {
        id:3,
        title: "Beautifull!",
        content: "These Shoes are Stylish!"
    }
]

app.get('/blogs',(request, respons) =>{
    respons.send(data);
});

app.get('/blogs/:id',(request, respons) =>{
    const {id} = request.params;
    const blog = data.find(element => {
        if (element.id == id) {
            return id 
        }
    });
    if(!blog){
        respons.sendStatus(404).json({message: "there is no Blog with that ID"})
    }else{
        respons.send(blog)
    }
});

app.post('/blogs', (request, respons) =>{
    const { title, content } = request.body;
    const newBlog = {id: data.length+1, title, content};
    data.push(newBlog);
    respons.json(data);
});

app.put('/blogs/:id',(request, respons)=>{
    const { id } = request.params;
    const {title, content} = request.body;
    const blogIndex = data.findIndex(element => element.id == id);
    if(blogIndex ===-1){
        respons.status(404).json({message:"Blog to update not found"});
        return;
    }

    data[blogIndex] = {...data[blogIndex],title, content}
    respons.json(data)
});

app.delete('/blogs/:id', (request, respons) =>{
    const { id } = request.params;
    const {title, content} = request.body;
    const blogIndex = data.findIndex(element => element.id == id);
    if(blogIndex ===-1){
        respons.status(404).json({message:"Blog to update not found"});
        return;
    }
    data.splice(blogIndex,1)
    respons.json(data);
});