import { useState } from "react";

function TodoItem(props) {


  
    return (
      <li className="item">
        <span onClick={props.onComplete}><i className={`bx bx-check ${props.completed && "active"}`}></i></span>
        <p className={`${props.completed && "completed"}`}>{props.text}</p>
        <span onClick={props.onDelete}><i className='bx bx-x'></i></span>
      </li>
    );
  }

  export default TodoItem;
