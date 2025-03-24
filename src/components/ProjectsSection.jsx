import React from "react";
import { projects, languages } from "../json/util.json";
import { Github } from "../icons/icons";

function ProjectsSection() {
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
    <section className="projects__section">
      <h2 className="hd">Projects</h2>
      <ul className="projects__list">
        {projects.map((project) => {
          return (
            <li key={project.project_name}>
              <div className="project">
                <img
                  src={project.project_image}
                  className="imageRFC"
                  alt={project.project_name}
                />
                <div className="plus">
                  <div className="head">
                    <h3 className="hd">{project.project_name}</h3>
                    <p className="txt">{project.description}</p>
                  </div>

                  <ul className="technologies">
                    {project.technologies.map((technology) => {
                      return (
                        <li key={technology}>
                          <IconImage technology={technology} />
                          {technology}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="repository"
              >
                Repository <Github />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectsSection;
