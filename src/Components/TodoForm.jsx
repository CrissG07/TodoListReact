import { useContext, useState } from "react";
import { TodoContext } from "./Context/TodoContext";

function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    }=useContext(TodoContext)

    const [newTodoValue,setNewTodoValue]=useState('');

    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    const onChange =(event)=>{
        setNewTodoValue(event.target.value)
    };

    const onClose = () => setOpenModal(false);

    return(
        <>
        <div className="modal-backdrop" onClick={onClose}></div>
        <form className='form' onSubmit={onSubmit}>
            <h2 className='title-form'>Añadir tareas</h2>
            <textarea className='textarea-form' 
            type="text" placeholder='Escribe tu tarea' 
            value={newTodoValue} 
            onChange={onChange}/>

            <input className='submit' type="submit" value="Añadir" />
          </form>
          </>
    );
}

export default TodoForm;