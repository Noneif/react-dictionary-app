import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonym.length) {
    return (
      <ul className="Synonyms">
        <strong>Synonyms:</strong>
        {props.synonym.map((synonym, index) => {
          return <li key={index}>{synonym},</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;
