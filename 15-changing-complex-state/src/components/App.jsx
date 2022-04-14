import React, { useState } from "react";

function App() {
  const [header, setHeader] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function firstNameHandler(event) {
    setFirstName(event.target.value);
  }

  function lastNameHandler(event) {
    setLastName(event.target.value);
  }

  function handleButton(event) {
    setHeader(firstName + " " + lastName);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {header}</h1>
      <form>
        <input
          value={firstName}
          onChange={firstNameHandler}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={lastNameHandler}
          name="lName"
          placeholder="Last Name"
        />
        <button onClick={handleButton}>Submit</button>
      </form>
    </div>
  );
}

export default App;
