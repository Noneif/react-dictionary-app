import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";

import "./SearchEngine.css";

function SearchEngine() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponseDictionary(response) {
    setResults(response.data);
  }

  function handleResponsePhotos(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponseDictionary);

    let pexelsApiKey = `563492ad6f91700001000001d0bbe99b6ea64f7aaa9e1750c9ac39c1`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { headers: { Authorization: `Bearer ${pexelsApiKey}` } };
    axios.get(pexelsApiUrl, headers).then(handleResponsePhotos);
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
        <Photos photos={photos} />
      </div>
    </div>
  );
}

export default SearchEngine;
