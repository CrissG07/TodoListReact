import { useContext } from "react";
import { TodoContext } from "./Context/TodoContext";

function CreateTodoButton() {
  const {openModal,setOpenModal} =useContext(TodoContext)

    return (
      <button onClick={()=>{openModal == true ? setOpenModal(false):setOpenModal(true)}}><i className='bx bx-plus'></i></button>
    );
  }

  export default CreateTodoButton;