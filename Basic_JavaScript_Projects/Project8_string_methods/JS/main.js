function slice_Method() {
  // Define the function
  var Str_1 = "The New York Knicks won last night's game"; // Declare variable
  var piece = Str_1.slice(4, 12); // Declare variable with slice method attach to value
  document.getElementById("Slice").innerHTML = piece; // method to that obtains the id of slice and inserts the piece variable value in the html
}

function upFunction() {
  // Define the function
  var text = "knicks win"; // Declare the variable
  var Uppercase = text.toUpperCase(); // Declare the variable and assign text variable to toUppercase method
  document.getElementById("upper").innerHTML = Uppercase; // method to that obtains the id of upper and inserts the upper case variable value in the html
}

function seekFunc() {
  // Define the function
  var text = "New York has beat the LA Clippers!"; // Declare the variable
  var position = text.search("beat"); // Declared variable that is assigned the text variable and the search method calls on this text to find the index position of "beat"
  document.getElementById("search").innerHTML = position; // method that obtains the id of search and inserts the position variable value in the html
}

function myString() {
  // Define the function
  var num = 98; // Declare the variable
  document.getElementById("to_string").innerHTML = num.toString(); // method that obtains the id of "to_string" and inserts the num variable that calls the toString method into the html
}

function myPrecision() {
  // Define the function
  var x = 903457075305.34976853690536856; // Declare the variable
  document.getElementById("Precision").innerHTML = x.toPrecision(7); // method that obtains the element with the id of "Precision" and inserts the value of the variable x that has the toPrecision method called upon it and turn the number in the argument into a string
}

function myFixFunc() {
  // Define the function
  var num = 76.89; // Declare the variable
  document.getElementById("fix").innerHTML = num.toFixed(1); // method that interacts with the document object and selects html element with a id of "fix" and insertsthe value of num.toFixed method into the html
}
