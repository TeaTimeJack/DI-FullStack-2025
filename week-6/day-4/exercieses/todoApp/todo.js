
export class TodoList {
    constructor() {
        this.list = {}
    }
    add(task){
        this.list[task] = "Uncompleted"
    }
    markTask(task){
        if(task in this.list){
            this.list[task] = "Complete!"
        }else{
            this.list[task] = "Uncompleted"
        }
    }
    showTasks(){
        console.log(this.list);
    }
}