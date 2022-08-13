const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),

    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Chihuahua",
    }),
    React.createElement(Pet, {
      name: "Jim",
      animal: "dog",
      breed: "Chihuahua",
    }),
    React.createElement(Pet, {
      name: "Bob",
      animal: "cat",
      breed: "Manx",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
