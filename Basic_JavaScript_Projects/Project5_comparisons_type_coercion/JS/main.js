var a = 78.5; // Assign a variable to a value

document.write(typeof a); // Use document.write method with a typeof operator on the variable

document.write("25" + 5); // Applied type coercion with string and a number

function myNan() {
  // Define the function to be called
  document.getElementById("nan").innerHTML = 0 / 0; // Use document.getElementById method to select element with a id of nan and display value
}

function myFalse() {
  // Define the function to be called
  document.getElementById("false").innerHTML = isNaN("285"); // Use document.getElementById method to select element with a id of false and display value using isNan method
}

function myTrue() {
  // Define the function to be called
  document.getElementById("true").innerHTML = isNaN("Hello, World!"); // Use document.getElementById method to select element with a id of true and display value using isNan method
}

function myInfinity() {
  // Define the function to be called
  document.getElementById("infinity").innerHTML = 4e410; // Use document.getElementById method to select element with id of infinity and display the value
}

function myNegInfinity() {
  document.getElementById("neg_infinity").innerHTML = -3e510; // Use document.getElementById method to select element with id of neg_infinity and display the value
}

function myBoolean() {
  // Define the function to be called
  var Bool = 20 < 2; // Assign variable Bool to a conditional statement
  document.getElementById("bool").innerHTML = Bool; // Use document.getElementById method to select element with a id of bool and display
}

console.log(2 * 6); // console.log a math operation

console.log(10 > 2); // console.log a boolean operation

document.write(10 * 5 == 55); // Use a document.write method to display the results of the comparison operator

document.write("that is all" === "that is all"); // Use a document.write method to display the results of the comparison

document.write(23 === "43"); // Use a document.write method to display the results of the triple equal sign comparison operator

document.write("23" == 23); // Use a document.write method to display the results of the triple equal sign comparison operator

document.write("that is all" == "that is all folks!"); // Use a document.write method to display the results of the triple equal sign comparison operator

document.write(23 > 5 && 3 < 10); // Use a document.write method to display the results of a && operator

document.write(23 > 5 || 5 > 13); // Use a document.write method to display the results of a || operator

function notOperator() {
  // Define a function that will be called
  document.getElementById("not").innerHTML = !(30 < 5); // Use document.getElementById to select element with a id of notOperator to display the results of the NOT operator
}
