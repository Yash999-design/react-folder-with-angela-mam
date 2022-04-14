/* 
//Challenge:
//1. Given that you can get the current time using:
let time = new Date().toLocaleTimeString();
console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
function sayHi() {
  console.log("Hey");
}
setInterval(sayHi, 1000);
*/
import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const time = new Date().toLocaleTimeString();
  /*
  //that's the another way of getting time:
  
  let time = new Date();

  let today =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  */
  const [currentTime, newTime] = useState(time);
  function getTime() {
    const anotherTime = new Date().toLocaleTimeString();
    newTime(anotherTime);
  }
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
