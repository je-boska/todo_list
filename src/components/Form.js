import React from "react";

const Form = ({
  setInputText,
  setTodos,
  inputText,
  todos,
  setStatus,
  setPrevTodos,
  prevTodos,
}) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setPrevTodos(prevTodos.concat([todos]));
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const undoHandler = (e) => {
    e.preventDefault();
    if (prevTodos.length > 0) {
      setTodos(prevTodos.pop());
    }
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <button onClick={undoHandler}>Undo</button>
    </form>
  );
};

export default Form;
