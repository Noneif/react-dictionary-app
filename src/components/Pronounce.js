import React from "react";

import "./Pronounce.css";

function Pronounce(props) {
  let audio = new Audio(props.pronounce);

  function start(event) {
    event.preventDefault();

    audio.play();
  }

  if (props.pronounce.length) {
    return (
      <div className="Pronounce">
        <a href="/" onClick={start}>
          <i className="fa-solid fa-music"></i>
        </a>
      </div>
    );
  } else {
    return null;
  }
}

export default Pronounce;
