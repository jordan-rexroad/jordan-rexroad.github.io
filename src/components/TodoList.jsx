import React, { useState } from 'react'
import {GrEdit} from 'react-icons/gr'
import TodoForm from './TodoForm';
import {MdDeleteForever} from 'react-icons/md'

function TodoList({todos, updateTodo, removeTodo, completeTodo}) {
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
if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
}
  return (
    <div>
        {todos.map((todo,index) => (
            <>
                <div
                className={todo.isCompleted ? "todo-complete":"todo-container"} 
                key={index}
                >
                    <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                        {todo.text}
                    </div>

                    <div className="icons">
                        <MdDeleteForever
                        onClick={()=>removeTodo(todo.id)} 
                        className="delete-icon"
                    />
                    <GrEdit
                    onClick={()=>setEdit({id: todo.id,value:todo.text})}
                    className="edit-icon"
                     />
                 </div> 
                </div>
            </>
       ))}
    </div>
  )
}

export default TodoList
