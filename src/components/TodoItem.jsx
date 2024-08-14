import React, { useState } from 'react';

const TodoItem = ({ todo, onToggleComplete, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  }}