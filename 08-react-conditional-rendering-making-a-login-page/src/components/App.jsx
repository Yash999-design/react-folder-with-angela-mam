import React from "react";
import Login from "./Login";

function App() {
  const isLoggedIn = false;
  const currentTime = new Date().getHours();
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} it is also valid, cause isLoggedIn just representing a boolean*/}

      {currentTime > 10 ? <h1>Why you still working?</h1> : null}
      {/* if you only want to show true statement and noting for false then you need to pass null for false. */}

      {currentTime > 5 && <h2>I need to wake up!</h2>}
      {/* that's the other way of doing it, here you can skip the false statement null for writing. */}
    </div>
  );
}

export default App;
