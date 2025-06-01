import React from "react";

function About() {
  return (
    <section className="about">
      <h1 className="title">About</h1>
      <p>
        My passion for web development began at 18, when I started learning
        HTML, CSS, and JavaScript to build simple web pages. Over time, I
        realized frontend wasn’t my strength, so I shifted focus to backend
        development.
      </p>
      <p>
        I began working with Node.js, Express.js, and MySQL to create backend
        services, and quickly became fascinated with the logic and architecture
        behind it. Since then, I’ve dedicated my time to coding and deepening my
        knowledge in backend technologies.
      </p>
      <p>
        Today, I’m a backend developer with solid frontend skills, looking for
        an opportunity to join a team where I can contribute, learn, and grow
        professionally.
      </p>
      <a
        href="/Woodley_TK_CV.pdf"
        download="Woodley_TK_CV.pdf"
        className="btn download-btn"
      >
        Download CV
      </a>
    </section>
  );
}

export default About;
