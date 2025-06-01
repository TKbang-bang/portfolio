import React from "react";
import { Github, Instagram, Linkedin } from "../svg/Icons.svg";

function Presentation() {
  return (
    <section className="presentation">
      <article className="presentation__text">
        <p className="else">Hello, I'm</p>
        <h1 className="name">Woodley T.K.</h1>
        <h2 className="job">Backend Developer</h2>
        <p className="else">
          Passionate about building robust backend systems — with solid frontend
          experience to match.
        </p>
        <a href="#contact" className="btn">
          Let's work together
        </a>
      </article>

      <img src="/men.webp" alt="Woodley T.K. portrait" />

      <article className="social">
        <a href="https://github.com/TKbang-bang" target="_blank">
          <Github />
        </a>

        <a
          href="https://www.linkedin.com/in/woodley-t-k-666873357/"
          target="_blank"
        >
          <Linkedin />
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <Instagram />
        </a>
      </article>
    </section>
  );
}

export default Presentation;
