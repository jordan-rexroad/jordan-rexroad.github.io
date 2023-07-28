import React, { useState } from 'react'
import {GrEdit} from 'react-icons/gr'
import TodoForm from './TodoForm';
import {MdDeleteForever} from 'react-icons/md'

function TodoList({todos, updateTodo, removeTodo}) {
    const [ edit, setEdit]= useState({
        id:null, 
        value:"",
    })
const submitUpdate=(value)=>{
    updateTodo(edit.id,value);
    setEdit({
        id:null,
        value:"",
    });
}
if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
}
  return (
    <div>
        {todos.map((todo,index) => (
            <>
                <div key={index}>
                    <div key={todo.id}>{todo.text} </div>
                </div>
                <div>
                    <MdDeleteForever
                    onClick={()=>removeTodo(todo.id)}
                    />
                    <GrEdit
                    onClick={()=>setEdit({id: todo.id,value:todo.text})}/>
            
            </div> 
            </>

       ))}

    </div>
  )
}

export default TodoList
