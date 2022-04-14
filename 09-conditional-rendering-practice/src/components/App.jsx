import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {userIsRegistered ? <Login /> : <Form />} */}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
