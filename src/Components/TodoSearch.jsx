import { useContext } from "react";
import { TodoContext } from "./Context/TodoContext";


function TodoSearch(){
  const {searchValue,setSearchValue} =useContext(TodoContext)
    
    return(
        <>
      <input className="input" type="text" placeholder="Cortar cebolla" 
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}/><i className='bx bx-search-alt-2' ></i>
      </>
    );
  }

  export default TodoSearch;