import React from "react";

import Example from "./Example";
import Synonyms from "./Synonyms";

import "./Definitions.css";

function Definitions(props) {
  return (
    <ol className="Definitions">
      {props.definitions.definitions.map((definition, index) => {
        return (
          <li key={index}>
            <strong>Definiton:</strong> {definition.definition}
            <Example example={definition.example} />
            <Synonyms synonym={definition.synonyms} />
          </li>
        );
      })}
    </ol>
  );
}

export default Definitions;
