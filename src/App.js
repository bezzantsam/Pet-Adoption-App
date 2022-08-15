import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, RouterContext } from "react-router-dom";
import SearchParams from "./SearchParams";
import { StictMode } from "react";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <div id="my-app">
        <h1> Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
