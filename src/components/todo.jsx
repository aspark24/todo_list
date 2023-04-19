import { useState } from "react";
import '../index.css';

function Todo() {
  const [newTodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    setTodos([...todos, todoItem]);
    setNewtodo("");
  };

  const handleTodoDelete = (e) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== e;
    });
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (e) => {
    const updatedTodos = todos.map((todo, i) => {
      if (e === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="text-center">
      <form
        onSubmit={(e) => {
          handleNewTodoSubmit(e);
        }}
      >
        <input
          onChange={(e) => {
            setNewtodo(e.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button className="btn btn-primary">ADD</button>
        </div>
      </form>
      <div className="mt-5">
        {todos.map((todo, i) => {
          return (
            <div key={i}>
                <span className={todo.complete ? 'strike' : ""}>{todo.text}</span>
              <input
                onChange={(e) => {
                  handleToggleComplete(i);
                }}
                checked={todo.complete}
                className="ms-1"
                type="checkbox"
              />
              <button
                className="ms-3 btn btn-dark"
                onClick={(e) => {
                  handleTodoDelete(i);
                }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
