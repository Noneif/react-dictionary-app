import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";
import Footer from "../Footer";

import "./SearchEngine.css";

function SearchEngine(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyWord);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [load, setLoad] = useState(false);

  function handleResponseDictionary(response) {
    setResults(response.data);
  }

  function handleResponsePhotos(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponseDictionary);

    let pexelsApiKey = `563492ad6f91700001000001d0bbe99b6ea64f7aaa9e1750c9ac39c1`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { headers: { Authorization: `Bearer ${pexelsApiKey}` } };
    axios.get(pexelsApiUrl, headers).then(handleResponsePhotos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function loaded() {
    setLoad(true);
    search();
  }

  function handleTyping(event) {
    setKeyword(event.target.value);
  }

  if (load) {
    return (
      <div className="SearchEngine">
        <div className="container">
          <section className="shadow">
            <div className="label">What word do you want to look up?</div>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="type here..."
                defaultValue={props.defaultKeyWord}
                onChange={handleTyping}
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div className="suggection">
              Suggested words: rainbow, wood, grace...
            </div>
          </section>
          <Results results={results} />
          <Photos photos={photos} />
          <Footer />
        </div>
      </div>
    );
  } else {
    loaded();
    return "Loading...";
  }
}

export default SearchEngine;
