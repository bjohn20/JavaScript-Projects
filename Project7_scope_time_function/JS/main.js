var A = 10; // Declare a variable and assign the value of 10

function mySubtraction() {
  // Define the function
  document.write(20 - A + "<br />"); // Inside the function execute this method to execute the statement
}

function mySubtraction_2() {
  // Define the function
  document.write(35 - A + "<br />"); // Inside the function execute this method to execute the statement
}

mySubtraction(); // Call the function mySubstraction
mySubtraction_2(); // Call the function mySubstraction_2

function myMultiply() {
  // Define the function
  var B = 10; // Declare variable B inside the scope of the function
  document.write(20 * B) + "<br />"; // Inside the function execute this method to execute the statement
}

function myMultiply_2() {
  // Define the function
  document.write(30 * B + "<br />"); // Inside the function execute this method to execute the statement
}

myMultiply(); // Call the function myMultiply()
myMultiply_2(); // Call the function myMultiply_2

function whats_up() {
  // Defnie the function
  if (new Date().getHours() < 17) {
    // if statement with the condition Date().getHours() > 17 execute code if true
    document.getElementById("greeting").innerHTML =
      "Whats up?! How is your day going?"; // If statement is true execute method which inserts string into html
  } else {
    // Else statement incase if statement returns false execute code below
    document.getElementById("greeting").innerHTML = "Whats up?"; // if statement is false execute method which inserts string into html
  }
}

function randomness() {
  // Define the function
  if (Math.random() * 50 > 25) {
    // if statement if condition returns true execute code in the if statement scope
    document.getElementById("random").innerHTML =
      "Number higher than half of 50"; // if statement is true execute method which inserts string into html
  }
}

function enter_site() {
  // Define the function
  age = document.getElementById("age").value; // Declare the age variable with a method that receives the value of the element with a id of age
  if (age > 21) {
    // if statement if conditon returns true execute code in the if statement scope
    Enter = "You have access to enter this site"; // Declare enter variable with string attached
  } else {
    // else statement incase if statement returns false execute code below
    Enter = "You are not old enough to enter this site! Please leave"; // Declare enter variable with string attached
  }

  document.getElementById("old_enough").innerHTML = Enter; // method that inserts variable that is execute by the if/else statement into the html
}

function Time_function() {
  // Define the function
  var Time = new Date().getHours(); // Declare the variable Time
  var Reply; // Declare Reply variable
  if (Time < 12 == Time > 0) {
    // if statement with a conditon if true execute code below
    Reply = "It is morning time!"; // Declare Reply variable with a string
  } else if (Time >= 12 == Time < 18) {
    // else if statement if previous condition doesnt hold true check if else if statement is true then execute code below
    Reply = "It is afternoon."; // Declare Reply variable which holds string
  } else {
    // else statement executes if if and else if condition isnt true
    Reply = "It is evening time."; // Declare Reply variable which holds string
  }
  document.getElementById("Time_of_day").innerHTML = Reply; // method that inserts variable that is execute if/else if statement into the html
}
