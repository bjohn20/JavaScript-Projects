function myAddition() {
  var addition = 5 + 4;
  document.getElementById("Math").innerHTML = addition;
}

function mySubtraction() {
  var subtraction = 9 - 2;
  document.getElementById("second").innerHTML = subtraction;
}

function myMultiplication() {
  var multiplication = 8 * 10;
  document.getElementById("third").innerHTML = multiplication;
}

function myDivision() {
  var division = 20 / 5;
  document.getElementById("fourth").innerHTML = division;
}

function myMultiple() {
  var operations = (2 * 5) / 8 - 10 + 23;
  document.getElementById("fifth").innerHTML = operations;
}

function myModulus() {
  var remainder = 25 % 3;
  document.getElementById("sixth").innerHTML = remainder;
}

function myNegation() {
  var x = 20;
  document.getElementById("seventh").innerHTML = -x;
}

function myIncrement() {
  var x = 20;
  var y = 54;
  x++;
  y--;
  document.getElementById("eighth").innerHTML = "X = " + x + " and Y = " + y;
}

function myRandom() {
  window.alert(Math.random() * 50);
}

function myRound() {
  var x = 75.83;
  document.getElementById("tenth").innerHTML = Math.round(x);
}
