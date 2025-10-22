const {Router} = require("express")
const router = Router();

const todoList = [
    {
        id:1,
        task: "cleen room",
        status: "Uncompleted"
    },
    {
        id:2,
        task: "paint the wall",
        status: "Uncompleted"
    }
]

router.get("/todos",(req,res)=>{
    res.send(todoList)
});

router.post("/todos",(req,res)=>{
    const {task , status} = req.body;
    const newTask = {id: todoList.length+1, task, status};
    todoList.push(newTask);
    res.json(todoList);
});

router.put("/todos/:id", (req,res)=>{
    const {id} = req.params;
    const {name,status} = req.body;
    const index = todoList.findIndex(element => element.id == id);
    if (index === -1) {
        res.status(404).json({message:"Task to update not found"});
    }else{
        todoList[index]= {...todoList[index], name, status}
        res.json(todoList)
    }
});

router.delete("/todos/:id", (req,res)=>{
    const {id} = req.params;
    const index = todoList.findIndex(element => element.id == id);
    if (index === -1) {
        res.status(404).json({message:"Task to Delete not found"});
    }else{
        todoList.splice(index,1);
        res.json(todoList)
    }
});



module.exports = router;