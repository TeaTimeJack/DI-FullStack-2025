import {TodoList} from "./todo.js"

const myList = new TodoList();

myList.add("clean");
myList.add("eat");
myList.add("workout");
myList.add("sleep");

myList.markTask("workout");
myList.showTasks();