import React from "react";
import {
  Css,
  Html,
  Javascript,
  Mysql,
  NodeJS,
  Typescript,
} from "../svg/Icons.svg";

function Tecnologies() {
  return (
    <section className="technologies">
      <h1 className="title">Tecnologies</h1>
      <div className="tecs">
        <span>
          <Html />
          <p>HTML</p>
        </span>

        <span>
          <Css />
          <p>CSS</p>
        </span>

        <span>
          <Javascript />
          <p>Javascript</p>
        </span>

        <span>
          <NodeJS />
          <p>Node js</p>
        </span>

        <span>
          <Typescript />
          <p>Typescipt</p>
        </span>

        <span>
          <Mysql />
          <p>MySql</p>
        </span>
      </div>
    </section>
  );
}

export default Tecnologies;
