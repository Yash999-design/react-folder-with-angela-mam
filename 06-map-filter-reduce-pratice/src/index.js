var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const doubleNumbers = numbers.map(function doublingValues(value) {
  return value * 2;
});
console.log(doubleNumbers);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const sumOfAllValues = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(sumOfAllValues);

//Find - find the first item that matches from an array. : This function comes recetly in ES6.
const firstMatchedValue = numbers.find(function (number) {
  return number > 10;
});
console.log(firstMatchedValue);

//FindIndex - find the index of the first item that matches.
const firstMatchedIndex = numbers.findIndex(function (value) {
  return value > 10;
});
console.log(firstMatchedIndex);
