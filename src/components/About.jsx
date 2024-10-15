import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1>About ToDo task management app</h1>
      <p>
        This is a React-based todo application that allows users to manage tasks
        effectively. The app features a todo list with functionalities to add,
        edit, complete, and remove tasks. Additionally, it includes a contact
        form for user inquiries.
        <ul>
          <h2>Features:</h2>
          <li>Add new tasks.</li>
          <li>Edit existing tasks.</li>
          <li>Mark tasks as complete or incomplete.</li>
          <li>Remove tasks.</li>
        </ul>
      </p>
    </div>
  );
}
