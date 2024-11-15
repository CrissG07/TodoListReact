function TodoList({children}){
    return(
        <div className="card">
            <ul>{children}</ul>
        </div>
    );
  }

  export default TodoList;