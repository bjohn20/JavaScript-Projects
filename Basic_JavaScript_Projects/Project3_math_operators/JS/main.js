function myAddition() {
  // Define Function
  var addition = 5 + 4; // Assign variable an expression
  document.getElementById("Math").innerHTML = addition; //Use the document.getElementById method to select the html element with a id of Math and store the value of the addition variable to the the display
}

function mySubtraction() {
  // Define the function
  var subtraction = 9 - 2; // Assigned variable an expression
  document.getElementById("second").innerHTML = subtraction; // Use the document.getElementById method to select the html element with a id of  z second and store the value of the subtraction variable to the display
}

function myMultiplication() {
  // Define the function
  var multiplication = 8 * 10; // Assign variable an expression
  document.getElementById("third").innerHTML = multiplication; // Use the document.getElementById method to select the html element with a id of third and store the value of the multiplication variable to the display
}

function myDivision() {
  // Define the function to be called
  var division = 20 / 5; // Assign the variable division an expression
  document.getElementById("fourth").innerHTML = division; // Use the document.getElementById method to select the html element with a id of fourth and store the value of the division variable to the display
}

function myMultiple() {
  // Define the function to be called
  var operations = (2 * 5) / 8 - 10 + 23; // Assign the variable operations to an expression
  document.getElementById("fifth").innerHTML = operations; // Use the document.getElementById method to select the html element with a id of fifthand store the value of the operations variable to the display
}

function myModulus() {
  // Define the function to be called
  var remainder = 25 % 3; // Assign the variable remainder to an expression
  document.getElementById("sixth").innerHTML = remainder; // Use the document.getElementById method to select the html element with a id of sixth and store the value of the remainder variable to the display
}

function myNegation() {
  // Define the function
  var x = 20; // Assign the variable x to the value
  document.getElementById("seventh").innerHTML = -x; // Use the document.getElementById method to select the html element with a id of seventh and store the value of the remainder variable to the display
}

function myIncrement() {
  // Define the function to be called
  var x = 20; // Assign the variable x to the value
  var y = 54; // Assign the variable y to the value
  x++; // Increment the variable x
  y--; // Decrement the variable y
  document.getElementById("eighth").innerHTML = "X = " + x + " and Y = " + y; // Use the document.getElementById method to select the html element with a id of eigth and store the value of the x & y variables to the display
}

function myRandom() {
  // Define the function to be called
  window.alert(Math.random() * 50); // This javascript statement performs the window.alert method which invokes the Math.random function which is multiplied by 50 and displays the number in an alert window
}

function myRound() {
  // Define the function to be called
  var x = 75.83; // Assign the variable x to the value
  document.getElementById("tenth").innerHTML = Math.round(x); // Use the document.getElementById method to select the html element with a id of tenth and store the value of the variable x to the display
}
