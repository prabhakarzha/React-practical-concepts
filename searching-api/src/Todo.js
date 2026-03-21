import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodo([...todo, { id: Date.now(), text: input }]); // Fixed: Date.now() and text
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>TODO app</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        className="search"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Added: onChange handler
      />
      <button onClick={addTodo}> ADD TODO</button>

      <ul>
        {todo.map(
          (
            item, // Fixed: Added return and proper mapping
          ) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Todo;
