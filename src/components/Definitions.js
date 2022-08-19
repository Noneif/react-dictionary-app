import React from "react";

import "./Definitions.css";

function Definitions(props) {
  return (
    <ol className="Definitions">
      {props.definitions.definitions.map((definition, index) => {
        return <li key={index}>{definition.definition}</li>;
      })}
    </ol>
  );
}

export default Definitions;
