import React from "react";

function Extra() {
  return (
    <section className="extra">
      <h2 className="hd">Extra</h2>
      <ul className="extra__list">
        <li>
          <p className="question hd">
            How many years of experience do you have?
          </p>
          <p className="response txt">
            I haven't worked in a company yet, but I've been learning and
            working on personal projects to grow as a backend and web developer.
            I'll never stop learning.
          </p>
        </li>

        <li>
          <p className="question hd">Have you only coded with JavaScript?</p>
          <p className="response txt">
            Actually, no. I've learned other languages outside of the JavaScript
            environment, such as Python, C++, and Java. The reason I chose
            JavaScript is that it's the language I feel most comfortable with.
            In the future, I want to learn more languages.
          </p>
        </li>

        <li>
          <p className="question hd">What are you looking for?</p>
          <p className="response txt">
            First of all, I'm looking for a job as a backend or web developer.
            It can be anywhere in the world, as long as it's a remote job.
            Secondly, I'm offering my services as a freelancer to help anyone
            who needs assistance with backend or web development.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Extra;
