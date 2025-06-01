import React from "react";
import Presentation from "./components/Presentation";
import "./App.css";
import About from "./components/About";
import Tecnologies from "./components/Tecnologies";
import Projects from "./components/Projects";
import Concepts from "./components/Concepts";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="app">
      <Presentation />
      <About />
      <Tecnologies />
      <Projects />
      <Concepts />
      <Contact />
    </main>
  );
}

export default App;
