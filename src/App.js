import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodosContainer from "./containers/TodosContainer";
import ContactContainer from "./containers/ContactContainer";
import Footer from "./components/Footer";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

const App = () => {
  return (
    <Router>
      <TodoProvider>
        <div id="root">
          <NavBar />
          <main>
            <Routes>
              <Route path="/todos" element={<TodosContainer />} />
              <Route path="/contact" element={<ContactContainer />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TodoProvider>
    </Router>
  );
};

export default App;
