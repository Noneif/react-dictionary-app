import React from "react";

import "./Meanings.css";
import Definitions from "./Definitions";

function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            {meaning.partOfSpeech}
            <Definitions definitions={meaning} />
          </div>
        );
      })}
    </div>
  );
}
export default Meanings;
