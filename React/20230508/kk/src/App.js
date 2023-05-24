import React, { Fragment } from "react";

function Sample(props) {
  const name = props.name;
  console.dir(props.name);
  return (
    <>
      <p>{name}</p>
    </>
  );
}

function App() {
  const color = { color: "blue" };
  return (
    <>
      <h1 style={color}>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
      <Sample name="kichan" />
    </>
  );
}
export default App;
