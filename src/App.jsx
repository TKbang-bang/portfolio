import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Github, Instagram, Linkedin } from "./icons/icons";
import Porfile from "./components/Porfile";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Utils from "./components/Utils";
import ProjectsSection from "./components/ProjectsSection";
import Extra from "./components/Extra";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <Porfile />
      <Technologies />
      <Utils />
      <ProjectsSection />
      <Extra />
      <Contact />
      {/* <Projects /> */}
    </main>
  );
}

export default App;
