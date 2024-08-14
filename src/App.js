import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodosContainer from "./containers/TodosContainer"
import ContactContainer from "./containers/ContactContainer"
import { TodoProvider } from './context/TodoContext';


function App() {
  return (
    <Router>
      <TodoProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/todos" element={<TodosContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </div>
      </TodoProvider>
    </Router>
  );
}

export default App;
