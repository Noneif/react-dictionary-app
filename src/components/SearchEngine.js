import React, { useState } from "react";

import "./SearchEngine.css";

function SearchEngine() {
  const [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Search for ${keyword} definition`);
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
