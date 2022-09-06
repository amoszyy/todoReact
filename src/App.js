import React from 'react'
import Todo from './components/Todo'
import DisplayTodo from './components/DisplayTodo'

import { useState } from 'react'

const App = () => {
  const [todo, settodo] = useState("")
  const [time, settime] = useState("")
  const [editedUserindex, seteditedUserindex] = useState(0)
  const [allTodo, setallTodo] = useState([])
  const addTodo = (myTodo)=>{
    let newTodo = {todo, time}
    setallTodo([...allTodo, newTodo])
  }
  const deleter = (index)=>{
    let deletedTodo = [...allTodo]
    let filteredTodo = deletedTodo.filter((user, ind)=>index!==ind)
    setallTodo(filteredTodo)

  }
  const editer = (index)=>{
   
    seteditedUserindex(index)
    console.log(index)

  }
  const updater = ()=>{
    let updatedDetails = [...allTodo]
    updatedDetails[editedUserindex]= {todo, time}
    setallTodo(updatedDetails)

  }
 
  return (
    <>
     <Todo addTodo={addTodo} todo={todo} settodo={settodo} settime={settime} time={time}/>
        
     <DisplayTodo allTodo={allTodo} deleter={deleter} settodo={settodo} seteditedUserindex={seteditedUserindex} editedUserindex={editedUserindex} editer={editer} setallTodo={setallTodo}   settime={settime} todo={todo} time={time} updater={updater}/> 
    </>
   
  )
}
 
export default App;

// export default App;
