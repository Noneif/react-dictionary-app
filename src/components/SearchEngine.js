import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

function SearchEngine() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
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
      </div>
    </div>
  );
}

export default SearchEngine;
