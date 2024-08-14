import React, { useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const TodosContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onRemove={removeTodo}
      />
    </div>
  );
};

export default TodosContainer;
