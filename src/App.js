import React from "react";

import SearchEngine from "./components/SearchEngine";

import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      <SearchEngine defaultKeyWord="hey" />
    </div>
  );
}

export default App;
