import React from "react";

import "./Phonetics.css";

function Phonetics(props) {
  let audio = new Audio(props.phonetics.phonetics[0].audio);

  function start(event) {
    event.preventDefault();
    audio.play();
  }

  return (
    <div className="Phonetics">
      <a href="/" onClick={start}>
        Click
      </a>
      <span>{props.phonetics.phonetic}</span>
    </div>
  );
}

export default Phonetics;
