import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home/home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import "./App.css";

function App() {
  return(
    <>
      <Navbar/>
        <div className="container">
          <Home/>
        </div>
        <Skills />
    </>
  );
}

export default App
