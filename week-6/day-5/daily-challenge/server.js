const express = require("express")
const cors = require('cors')
const {emojis} = require('./database.js')

const app = express();
const PORT = 3069;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
app.use(cors());
app.use('/',express.static(__dirname)); /**must have to run HTML web (add the path after dirname) */
app.use(express.json());

app.get('/emojis', (req,res)=>{
    res.send(emojis)
});

app.get('/emojis/search/:name', (req,res)=>{
    const {name} = req.params;

    const filterEmojis = emojis.filter(element =>{
        return element.name.toLowerCase().includes(name.toLowerCase())
    });
    if(filterEmojis.lenght === 0){
        res.status(404).json({messege:"There is No Emoji with this Name"})
    }else{
        res.json(filterEmojis);
    }
})

app.get('/emojis/:id', (req,res) =>{
    const {id} = req.params;
    const emoji = emojis.find(element => element.id == id);
    if (!emoji) {
        res.sendStatus(404).json({messege:"this Emoji ID Does Not Exist"}); 
    }else{
        res.send(emoji)
    }
});

