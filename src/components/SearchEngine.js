import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./SearchEngine.css";

function SearchEngine() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleTyping(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="type here..."
            onChange={handleTyping}
          />
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}

export default SearchEngine;
