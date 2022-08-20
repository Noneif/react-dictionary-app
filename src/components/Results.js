import React from "react";

import Meanings from "./Meanings";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="word">{props.results[0].word}</div>
        {props.results.map((results, index) => {
          return (
            <div className="group-meaning" key={index}>
              {index + 1})
              <Meanings meanings={results} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
