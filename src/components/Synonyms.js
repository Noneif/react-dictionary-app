import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  console.log(props.synonym);
  if (props.synonym) {
    <ul className="Synonyms">
      <p>
        <strong>Synonyms:</strong>
      </p>
      {props.synonym.map((synonym, index) => {
        return <li key={index}>{synonym}</li>;
      })}
    </ul>;
  } else {
    return null;
  }
}

export default Synonyms;
