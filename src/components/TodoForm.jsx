import React, { useRef, useState } from 'react'

function TodoForm (props) {
    const [input, setInput]= useState(props.edit ? props.edit.value : "");
    const inputRef= useRef(null);

    const handleChange =(e) => {
        setInput(e.target.value);
    }

        const handleSubmit=(e)=>{
            e.preventDefault();
            if (typeof props.onSubmit === 'function') { 
            props.onSubmit({
                id:Math.floor(Math.random() * 10000),
                text:input
            })
        }

        }
  return (
    <form className="todo_form">
        {props.edit ? (
        <>
        <input
        placeholder='Add your task here...'
        value={input}
        onChange={handleChange}
        name="text"
        ref={inputRef}
        className="input-edit" 
        />
        <button onClick={handleSubmit} className="edit-button">Update</button>
        </>
        ):(

    <>

     <input
     placeholder='Add your task here...'
     value={input}
     onChange={handleChange}
     name="text"
     ref={inputRef}
     className ="input-add"
     />
    <button onClick={handleSubmit}className="add-button">Add</button>
    </>
        )}
     </form>
  )
}
  

export default TodoForm