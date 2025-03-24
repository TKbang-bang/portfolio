import React from "react";
import { utils } from "../json/util.json";

function Utils() {
  return (
    <section className="utils">
      <h2 className="hd">Utils</h2>
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
    </section>
  );
}

export default Utils;
