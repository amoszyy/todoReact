import React from 'react'

const Todo = ({addTodo,  settodo, settime}) => {
    // console.log(addTodo)
    // console.log(todo)   
    
  
  return (
    <>
    <h1 className='text-center'>todo</h1>
 
    <div className='col-md-6  mx-auto '>
        <div className='container bg-dark shadow'>
            <div className='row'>
                <input type="text " className='form-control col-md-4 col-6 mx-auto' onChange={(e)=>settodo(e.target.value)} />
                
            </div>
            <div className='row'>
            <input type="time" className='form-control col-md-4 col-6 mx-auto' onChange={(e)=>settime(e.target.value)}/>
            
            {/* <button className='btn btn-info btn-outline-dark col-md-12' onClick={()=>addTodo(myTodo)}>Add Todo</button> */}
            <button className='btn btn-info btn-outline-dark col-md-12' onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    </div>
    
    
 
    </>
   
  )
}

export default Todo;