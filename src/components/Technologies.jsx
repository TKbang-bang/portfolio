import React from "react";
import { languages } from "../json/util.json";

function Technologies() {
  return (
    <section className="technologies">
      <h2 className="hd">Technologies</h2>
      <ul className="technologies__list">
        {languages.map((language) => {
          return (
            <li key={language.name}>
              <img src={language.icon} alt={language.name} />
              {language.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Technologies;
