import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onToggleComplete, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="todo-edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
