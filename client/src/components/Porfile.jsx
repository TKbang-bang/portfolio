import React, { useEffect, useState } from "react";
import { Github, Instagram, Linkedin } from "../icons/icons";

function Porfile() {
  const texts = ["Frontend Dev", "Backend Dev", "Fullstack Dev", "Web Dev"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (deleting) {
      timeout = setTimeout(() => {
        setText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!deleting && charIndex === currentText.length) {
      setTimeout(() => setDeleting(true), 100);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <section className="profile">
      <article className="user">
        <img src="/tk.jpg" alt="tk profile" />

        <div className="user__info">
          <h1>Tanis Woodley K.</h1>
          <p className="alias">
            Alias: <span className="plus">TK</span>
          </p>
          <p>Always on somthing new</p>
          <p className="autowrite">
            I'm a <span className="plus">{text}</span>
          </p>

          <ul className="user__info__contact">
            <li>
              <a
                href="https://www.linkedin.com/in/woodley-tanis-k-666873357/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TKbang-bang"
                target="_blank"
                rel="noopener noreferrer"
              >
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

          <div className="btns">
            <button>Download CV</button>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </article>
      <article className="about">
        <h3 className="title">About me</h3>
        <p>
          I am a programmer specialized in back-end development. The
          technologies I use the most are: node js, express, mysql, in the
          back-end, and in the front-end: html, css, javascript, react. Although
          I do not specialize in front-end, I have a lot of knowledge about it.
          Although most of my projects have been with JavaScript-based
          technologies, I am open to exploring and working with other languages
          and tools. Although I do not have formal work experience, I have
          developed several personal projects where I have applied my knowledge
          and technical skills to the maximum.
        </p>
      </article>
      {/* <article className="user">
        <img
          src="/tk.jpg"
          alt="profile image of woodley tanis tk"
          loading="lazy"
        />

        <div className="user__info">
          <h3>Tanis Woodley</h3>
          <h3>(tk)</h3>

          <ul className="user__info__contact">
            <li>
              <a
                href="https://www.linkedin.com/in/woodley-tanis-k-666873357/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TKbang-bang"
                target="_blank"
                rel="noopener noreferrer"
              >
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

          <h2 className="hd">Back-end Dev</h2>
        </div>
      </article>

      <article className="bio">
        <h2 className="hd">About me</h2>
        <p className="txt">
          I am a programmer specialized in back-end development. The
          technologies I use the most are: node js, express, mysql, in the
          back-end, and in the front-end: html, css, javascript, react. Although
          I do not specialize in front-end, I have a lot of knowledge about it.
          Although most of my projects have been with JavaScript-based
          technologies, I am open to exploring and working with other languages
          and tools. Although I do not have formal work experience, I have
          developed several personal projects where I have applied my knowledge
          and technical skills to the maximum.
        </p>
      </article> */}
    </section>
  );
}

export default Porfile;
