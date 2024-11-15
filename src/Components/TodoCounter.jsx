import { useContext } from "react";
import { TodoContext } from "./Context/TodoContext";

function TodoCounter(){
  const {completedTodos,totalTodos}=useContext(TodoContext)
    return(
      totalTodos==completedTodos ? 
        
      <p className="description">✨Felicidades!! Completaste todas las tareas✨</p> 
      
      :

      <p className="description">Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</p>
    
    );
  }

  export default TodoCounter;