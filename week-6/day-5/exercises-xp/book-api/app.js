const express = require('express');

const app = express();
const PORT = 5000
app.listen(PORT, () =>{
    console.log(`Book api is running on ${PORT}`);
})

const data = [
    {
        id:1,
        title:"Harry Potter",
        author:"JK Rollings",
        publishedYear: 1997
    },
    {
        id:2,
        title:"James and the gaint Peach",
        author:"Roald Dahl",
        publishedYear: 1961
    }
]

app.get('/api/books',(req,res) =>{
    res.send(data)
})

app.get('/api/books/:bookId', (req,res) =>{
    const {bookId} = req.params;
    const book = data.find(element =>{
        if(element.id == bookId){
            return true
        }
    });
    if (!book) {
        res.sendStatus(404).json({message: "Book not found"})
    }else{
        res.send(book)
    }
});

app.post('/api/books', (req,res) =>{
    const {title, author, publishedYear} = req.body;
    const newBook = {id: data.length+1, title, author, publishedYear};
    data.push(newBook);
    res.json(data);
    
})