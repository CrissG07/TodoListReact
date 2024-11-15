import { useContext } from 'react';
import './App.css';
import TodoCounter from '../Components/TodoCounter';
import TodoSearch from '../Components/TodoSearch';
import TodoList from '../Components/TodoList';
import TodoItem from '../Components/TodoItem';
import CreateTodoButton from '../Components/CreateTodoButton';
import TodoLoading from '../Components/TodosInfo/TodoLoading';
import TodoError from '../Components/TodosInfo/TodoError';
import EmptyTodos from '../Components/TodosInfo/EmptyTodos';
import { TodoContext } from '../Components/Context/TodoContext'; // Importa el contexto correctamente
import { Modal } from '../Modal';
import TodoForm from '../Components/TodoForm';

function App() {
  const {
    loading,
    error,
    searchedsTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = useContext(TodoContext); // Usa el contexto

  return (
    <>
      <h1 className="title">Todo List Criss</h1>

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
        )}
        {error && <TodoError />}
        {!loading && searchedsTodos.length === 0 && <EmptyTodos />}

        {searchedsTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm/>
      </Modal>
      )}
      

    </>
  );
}

export default App;
