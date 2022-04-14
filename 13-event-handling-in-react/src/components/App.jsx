import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Hi");
  }

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={
          isMouseOver
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        } //there is a note bottom of the page
      >
        Submit
      </button>
    </div>
  );
}

export default App;

/* style the button other way:

style={{ backgroundColor: isMouseOver ? "black" : "white" }}

*/