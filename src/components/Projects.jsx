import React from "react";
import myJson from "../json/util.json";
import { Github } from "../icons/icons";
import Tecnologies from "./Technologies";
import Utils from "./Utils";
import ProjectsSection from "./ProjectsSection";
import Extra from "./Extra";
import Contact from "./Contact";

function Projects() {
  return (
    <section className="projects">
      <Tecnologies />

      <Utils />

      <ProjectsSection />

      <Extra />

      <Contact />
    </section>
  );
}

export default Projects;
