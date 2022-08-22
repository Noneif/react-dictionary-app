import React from "react";

import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

import "./Meanings.css";

function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <div className="partOfSpeech">{meaning.partOfSpeech}</div>
            <Definitions definitions={meaning} />
            <Synonyms synonym={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
export default Meanings;
