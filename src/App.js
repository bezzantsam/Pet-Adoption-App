import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, RouterContext } from "react-router-dom";
import SearchParams from "./SearchParams";
import { StictMode } from "react";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1> Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
