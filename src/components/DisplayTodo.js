import React from 'react'
import { useState } from 'react';

const DisplayTodo = ({allTodo, deleter, seteditedUserindex, editedUserindex, editer, setallTodo, settime, settodo, todo, time, updater }) => {
  
  // const [firstname, setfirstname] = useState("")
  // const [lastname, setlastname] = useState("")
  // const editer = (index)=>{
   
  //   seteditedUserindex(index)
  //   console.log(index)

  // }

  
  // console.log(allTodo)
  // console.log(todo)


  return (
    <>
    <table className='table table-striped table-light shadow my-3 table-bordered shadow'>
        <thead>
            <th>S/N</th>
            <th>Todo</th>
            <th>time</th>
            <th>del</th>
            <th>edit</th>
                
            
         
        </thead>
        {
          allTodo.map((user, index)=>(
            <>
            <tr>
              <td>{index + 1}</td>
              <td>{user.todo}</td>
              <td>{user.time}</td>
              <td><button className='btn btn-danger' onClick={()=>deleter(index)}>Delete</button></td>
              <td><button data-toggle="modal"data-target="#exampleModal" className="btn btn-warning mx-2" onClick={()=>editer(index)}>Edit</button> </td>
                                       
            </tr>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Edit Details for {editedUserindex} </h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                    <input type="text"  className="form-control my-2" 
                                    placeholder={allTodo[editedUserindex].todo} onChange={(e)=>settodo(e.target.value)}/>
                                    <input type="text"  className="form-control my-2" 
                                    placeholder={allTodo[editedUserindex].time} onChange={(e)=>settime(e.target.value)}/>
                                 
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={updater}>Save changes</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
 
            </>

          ))
        }
    </table>
    
    </>

  )
}

export default DisplayTodo;