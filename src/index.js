import React from "react";
import { render } from "react-dom";
import Form from "./form";
class Appclass extends React.Component {
  render() {
    return <h1>Hello World this is a class component</h1>;
  }
}

const Appfunction = () => {
  return (
    <>
      <h1>Hello World this is a functional component</h1>
      <Appclass />
      <Form/>
    </>
  );
};

render(<Appfunction />, document.getElementById("root"));
