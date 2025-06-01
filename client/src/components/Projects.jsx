import React from "react";
import { Github, Mysql, NodeJS, ReactIcon } from "../svg/Icons.svg";

const projects = [
  {
    title: "Weave",
    description:
      "A social media web project that allows users to create posts, comment, like, follow other users, save posts, and more.",
    image: "/weave.png",
    repo: "https://github.com/TKbang-bang/Weave",
    technologies: [
      <ReactIcon key="react" />,
      <NodeJS key="node" />,
      <Mysql key="mysql" />,
    ],
  },
  {
    title: "Chat JWT",
    description:
      "A chat web application where users can create rooms, send messages, and interact in real-time using JWT authentication.",
    image: "/no_image.png",
    repo: "https://github.com/TKbang-bang/chat_jwt",
    technologies: [
      <ReactIcon key="react" />,
      <NodeJS key="node" />,
      <Mysql key="mysql" />,
    ],
  },
];

function Projects() {
  return (
    <section className="projects">
      <h1 className="title">Top Projects</h1>

      <div className="_projects">
        {projects.map((project, index) => (
          <article key={index}>
            <img src={project.image} alt={`${project.title} screenshot`} />
            <div className="info">
              <p className="_title">{project.title}</p>
              <p className="description">{project.description}</p>
            </div>
            <div className="technologies">{project.technologies}</div>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <Github /> <p>Repository</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
