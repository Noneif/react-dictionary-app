import React from "react";

import Example from "./Example";

import "./Definitions.css";

function Definitions(props) {
  return (
    <ol className="Definitions">
      {props.definitions.definitions.map((definition, index) => {
        return (
          <li key={index}>
            {definition.definition}
            <Example example={definition.example} />
          </li>
        );
      })}
    </ol>
  );
}

export default Definitions;
