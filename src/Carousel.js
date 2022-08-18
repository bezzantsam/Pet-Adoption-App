import { Component } from "react";

//other option
// import React from "react"
// class Carousel extends React.Component {}

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
}
export default Carousel;
