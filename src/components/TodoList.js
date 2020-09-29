import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setPrevTodos,
  prevTodos,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
            setPrevTodos={setPrevTodos}
            prevTodos={prevTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
