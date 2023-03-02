import React from "react";

import Pronounce from "./Pronounce";

import "./Phonetics.css";

function Phonetics(props) {
  return (
    <div className="Phonetics">
      <Pronounce pronounce={props.phonetics.phonetics[0].audio} />
      <span>{props.phonetics.phonetic}</span>
    </div>
  );
}

export default Phonetics;
