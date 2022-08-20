import React from "react";

import "./Example.css";

function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <em>Example:</em> {props.example}
      </div>
    );
  } else {
    return null;
  }
}

export default Example;
