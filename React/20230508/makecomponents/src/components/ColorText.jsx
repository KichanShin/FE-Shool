import React from "react";

export default function components({ color }) {
  return (
    <div>
      <p style={{ style: "color" }}>색이 바뀌어요!</p>
      <h2>색이 바뀌어요! {{ style: props.yellow }}</h2>
      <h3>색이 바뀌어요! {{ style: props.green }}</h3>
    </div>
  );
}
