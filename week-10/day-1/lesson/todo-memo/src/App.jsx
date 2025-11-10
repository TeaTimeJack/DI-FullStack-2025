import { useState , useCallback, useMemo} from 'react'
import Todo from './Todo'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const addTask = () =>{
    setTodos((todos)=>[...todos, "new task " + todos.length])
  };

  const addTask2 = useCallback(() => {
      setTodos((todos)=>[...todos, "new task " + todos.length])
    },[])

    const heavyTask = (num=0) =>{
      for (let i = 0; i < 99999; i++) {
        num++
      }
      return num;
    }

    // const result = heavyTask()
    // console.log(result);  
    // THIS WILL RENDER EVERY TIME - NO NEED 

    

    const result = useMemo(()=>{
      const sum = heavyTask();
      console.log(sum);
    },[])
    

  return (
    <>
      <h1>React.memo / useCallback / useMemo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={() =>addTask()}>Add Task</button>
       <Todo todos={todos} addTask={addTask2}/>
      </div>
    </>
  )
}

export default App
