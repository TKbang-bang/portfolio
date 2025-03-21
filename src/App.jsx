import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Github, Instagram, Linkedin } from "./icons/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <section className="profile">
        <article className="user">
          <img
            src="/tk.jpg"
            alt="profile image of woodley tanis tk"
            loading="lazy"
          />
          <h3>Tanis Woodley</h3>
          <h3>(tk)</h3>
        </article>

        <article className="contact">
          <ul>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                {" "}
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                {" "}
                <Github />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                {" "}
                <Instagram />
              </a>
            </li>
          </ul>
        </article>

        <article>
          <h2>Back-end Dev</h2>
        </article>

        <article className="bio">
          <h2>About me</h2>
          <p>
            I am a programmer specialized in back-end development. The
            technologies I use the most are: node js, express, mysql, in the
            back-end, and in the front-end: html, css, javascript, react.
            Although I do not specialize in front-end, I have a lot of knowledge
            about it. Although most of my projects have been with
            JavaScript-based technologies, I am open to exploring and working
            with other languages and tools. Although I do not have formal work
            experience, I have developed several personal projects where I have
            applied my knowledge and technical skills to the maximum.
          </p>
        </article>
      </section>
      <section className="projects"></section>
    </main>
  );
}

export default App;
