import React from "react";

const TodoItem = ({ todo, onToggleComplete, onRemove }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
