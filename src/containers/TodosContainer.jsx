import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { useTodos } from "../context/TodoContext";

const TodosContainer = () => {
  const { todos, addTodo, toggleComplete, removeTodo, editTodo } = useTodos();

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onRemove={removeTodo}
        onEdit={editTodo}
      />
    </div>
  );
};

export default TodosContainer;
