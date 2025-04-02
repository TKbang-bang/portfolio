import React from "react";
import { projects, languages } from "../json/util.json";
import { Link } from "react-router-dom";
import { Github } from "../icons/icons";

function Portfolio() {
  const IconImage = ({ technology }) => {
    const ico = languages.find((language) => language.name == technology);
    return (
      <img
        src={ico ? ico.icon : "/default.avif"}
        className="imageIcon"
        alt={technology}
      />
    );
  };

  return (
    <section className="portfolio">
      <h1 className="title">Portfolio</h1>

      <article className="projects">
        <ul className="projects__list">
          {projects.map((project) => {
            return (
              <li className="project" key={project.project_name}>
                <div
                  className="img__container"
                  style={{
                    background: project.background,
                    background: project.linear,
                  }}
                >
                  <img
                    src={project.project_image}
                    className="imageRFC"
                    alt=""
                  />
                </div>
                <div className="plus">
                  <h3 className="title">{project.project_name}</h3>
                  <p>{project.description}</p>
                  <ul className="project__technologies">
                    {project.technologies.map((technology) => {
                      return (
                        <li key={technology}>
                          <IconImage technology={technology} />
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Portfolio</p> <img src="/icons8-github-96.png" alt="" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <Link>See more</Link>
      </article>
    </section>
  );
}

export default Portfolio;
