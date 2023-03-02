import React from "react";

import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="shadow">
          <div className="word">{props.results[0].word}</div>
          <Phonetics phonetics={props.results[0]} />
        </section>
        {props.results.map((results, index) => {
          return (
            <section className="shadow" key={index}>
              <div className="group-meaning">
                {index + 1})
                <Meanings meanings={results} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
