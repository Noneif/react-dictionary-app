import React from "react";

import SearchEngine from "./components/SearchEngine";

import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="img-fluid shadow logo" alt="img" />
      <SearchEngine />
    </div>
  );
}

export default App;
