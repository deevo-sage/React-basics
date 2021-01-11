import React from "react";
import { render } from "react-dom";

class Appclass extends React.Component {
  render() {
    return <h1>Hello World this is a class component</h1>;
  }
}

const Appfunction = () => {
  return <h1>Hello World this is a functional component
      <Appclass/
  </h1>;
};

render(<Appfunction />, document.getElementById("root"));
