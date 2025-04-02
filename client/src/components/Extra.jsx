import React from "react";
import { utils, languages } from "../json/util.json";

function Extra() {
  return (
    <section className="extra">
      <article className="technologies">
        <h1 className="title">Technologies</h1>

        <div className="all">
          <div className="frontend">
            <h4>Fronted</h4>
            <ul className="frontend__list">
              {languages
                .filter((language) => language.side == "frontend")
                .map((language) => {
                  return (
                    <li key={language.name}>
                      <img src={language.icon} alt={language.name} />
                      {language.name}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="backend">
            <h4>Backend</h4>
            <ul className="backend__list">
              {languages
                .filter((language) => language.side == "backend")
                .map((language) => {
                  return (
                    <li key={language.name}>
                      <img src={language.icon} alt={language.name} />
                      {language.name}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="utils">
            <h4>Utils</h4>
            <ul className="utils__list">
              {utils.map((util) => {
                return (
                  <li key={util.name}>
                    <img src={util.icon} alt={util.name} />
                    {util.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
      <article className="extra__container">
        <h1 className="title">Extra</h1>
        <ul className="extra__list">
          <li>
            <p className="question ">
              How many years of experience do you have?
            </p>
            <p className="response ">
              I haven't worked in a company yet, but I've been learning and
              working on personal projects to grow as a backend and web
              developer. I'll never stop learning.
            </p>
          </li>

          <li>
            <p className="question ">Have you only coded with JavaScript?</p>
            <p className="response ">
              Actually, no. I've learned other languages outside of the
              JavaScript environment, such as Python, C++, and Java. The reason
              I chose JavaScript is that it's the language I feel most
              comfortable with. In the future, I want to learn more languages.
            </p>
          </li>

          <li>
            <p className="question ">What are you looking for?</p>
            <p className="response ">
              First of all, I'm looking for a job as a backend or web developer.
              It can be anywhere in the world, as long as it's a remote job.
              Secondly, I'm offering my services as a freelancer to help anyone
              who needs assistance with backend or web development.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Extra;
