const express = require('express');

const app = express();

const PORT = 3001
app.listen(PORT, () =>{
    console.log(`Run on ${PORT}`);
});


/*
middleware ->*/
app.use('/',express.static(__dirname + '/public'));
/* body-parser (npm package - includs in express at V5+*/ 
app.use(express.json());


const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Amit Jackson",
    username: "TeaTime",
    email: "amitjack14@melissa.tv",
  }
];


app.get('/users', (request, respons) =>{
    // respons.send("hi from server");
    // respons.send("<h1>hi</h1> <h2>from server</h2>");
    respons.send(users);
});

app.get('/users/:id', (req, res)=>{
    const {id} = req.params;
    const user = users.find(item => item.id == id);
    if (!user) {
        res.sendStatus(404);
    }else{
        res.send(user);
    }
});


app.get('/search', (req, res)=>{
    const {name} = req.query;
    console.log(name);
    
    const filterUsers = users.filter(item =>{
        return item.name.toLowerCase().includes(name.toLowerCase())
    });
    if (filterUsers.length === 0 ) {
        res.status(404).json({message: 'No User match'});
        return
    }

    res.json(filterUsers);
});

app.post('/users', (req,res) =>{
    // console.log(req.body);
    const {name, username, email} = req.body;
    const newUser = {id: users.length+1, name , email, username};
    users.push(newUser)
    res.send(users)
});

app.put('/users/:id', (req,res)=>{
    const { id } = req.params;
    const { name, username, email } = req.body;

    const index = users.findIndex(item => item.id == id);

    if(index ===-1){
        res.status(404).json({message:"user to update not found"});
        return;
    }

    users[index] ={...users[index],name, username, email}
    res.json(users);
});

app.delete('/users/:id', (req,res)=>{
    const {id} = req.params;
    const index = users.findIndex(item => item.id == id)
    if(index ===-1){
        res.status(404).json({message:"user to update not found"});
        return;
    }
    users.splice(index,1);
    res.json(users);
})

/*

HTTP - methods - CRUD
reed - GET - retrive data
create -  POST - send/Create new data
update -  PUT - Update data
delete -  DELETE - delete data



RESTfull
    htttp://exapmle.com/users GET - get users
    htttp://exapmle.com/users GET - POST create new user
    htttp://exapmle.com/users GET - PUT update a user
    htttp://exapmle.com/users GET - DELETE users

*/


/**
 * 
 */