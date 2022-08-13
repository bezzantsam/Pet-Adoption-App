import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div id="my-app">
    <h1> Adopt Me!</h1>
    <Pet name="Jimbo" animal="dog" breed="Chihuahua" />
    <Pet name="Bob" animal="cat" breed="Persian" />
    <Pet name="Sally" animal="dog" breed="Pug" />
  </div>;
};

render(<App />, document.getElementById("root"));
