// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
console.log(honda);
console.log("\n");
console.log(tesla);

/*
const [teslaTopColour, teslaTopSpeed] = [
  tesla.coloursByPopularity[0],
  tesla.speedStats.topSpeed,
];
*/

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

/*
const [hondaTopColour, hondaTopSpeed] = [
  honda.coloursByPopularity[0],
  honda.speedStats.topSpeed,
];
*/

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

console.log(teslaTopSpeed, hondaTopSpeed);

ReactDOM.render(
  <table>
    <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);

/*
ReactDOM.render(<h1>Hi There!</h1>, document.getElementById("root"));
*/
