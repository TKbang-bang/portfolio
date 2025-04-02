import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Porfile from "./components/Porfile";
// import About from "./components/About";
// import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Extra from "./components/Extra";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="App">
      <Nav />
      <Porfile />
      <Portfolio />
      <Extra />
      <Contact />
      <section className="footer">
        <p>&copy; 2025 TK Portfolio</p>
      </section>
    </main>
  );
}

export default App;
