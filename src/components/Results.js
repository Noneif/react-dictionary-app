import React from "react";

import Meanings from "./Meanings";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <ol>
          {props.results.map((results, index) => {
            return (
              <li key={index}>
                {results.word}
                <Meanings meanings={results} />
              </li>
            );
          })}
        </ol>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
