import React from "react";
import { Github, Instagram, Linkedin } from "../icons/icons";

function Porfile() {
  return (
    <section className="profile">
      <article className="user">
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
      </article>
    </section>
  );
}

export default Porfile;
