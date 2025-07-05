import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);


  //By this approach, it keeps sending fetch requests to backend as it is in a re-render loop and this needs to 
  //fixed.
  // fetch("http://localhost:3000/todos")
  // .then(async function (res) {
  //   const json=await res.json()
  //   setTodos(json.todos);
  // })
  

  return (
    <div>
      <CreateTodo></CreateTodo> <br />
      <Todos todos={
        todos
      }></Todos>
    </div>
  )
}

export default App
