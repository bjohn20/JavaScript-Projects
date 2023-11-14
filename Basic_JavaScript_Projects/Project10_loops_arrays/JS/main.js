function Call_Loop() {
  // Define the function
  var Digit = ""; // Declare variable Digit
  var X = 1; // Declare variable X
  while (X < 15) {
    // While loop with a condition that will execute code
    Digit += "<br />" + X; // The string "<br />" and X is appended to the variable Digit
    X++; // X is incremented throughout the iteration
  }
  document.getElementById("Loop").innerHTML = Digit;
}

var text = "This is my text that I'm doing for this exercise"; // Declared text variable with a string
var length = text.length; // Declared variable with that assigns the length of the string text to the variable length

document.getElementById("length").innerHTML = length; // sets the innerHTML property of the element with a id of length to the value of variable length

var Instruments = [
  // Declared variable Instruments assigned an array
  "Drums",
  "Piano",
  "Tuba",
  "Guitar",
  "saxophone",
  "trumpet",
  "flute",
];

var Content = ""; // Declared variable of Content assigned a empty string
var x; // Declared variable of x

function for_loop() {
  // Defined function for_loop
  for (x = 0; x < Instruments.length; x++) {
    // for loop that iterates over the Instruments array
    Content += Instruments[x] + "<br />"; // the for loop adds each element of the array to the Content variable with a break tag after
  }
  document.getElementById("List_of_Instruments").innerHTML = Content; // The innerHTML property of the element with a id of "List_of_Instruments" is assigned to the Content variable
}

function array_Function() {
  // Defined function array_Function
  var Dream_cars = []; // Declare empty Dream_cars array
  Dream_cars[0] = "Tesla"; // Assigns the string to the index of 0 to the Dream_cars array
  Dream_cars[1] = "Mustang Mach E"; // Assigns the string to the index of 1 to the Dream_cars array
  Dream_cars[2] = "Jeep Gladiator"; // // Assigns the string to the index of 2 to the Dream_cars array
  Dream_cars[3] = "Lexus GX"; // Assigns the string to the index of 3 to the Dream_cars array
  document.getElementById("Array").innerHTML =
    "One of my dream car for when I get a job is " + Dream_cars[3] + "."; // sets the innHTML property with a id of "Array" is assigned to the string that's also concatenated with the Dream_cars index of 3 followed by a string of "."
}

function constant_functions() {
  // Define the function constant_function
  const dream_car = {
    // Declare dream_car object with properties
    type: "suv", // define a type prop with a string value
    brand: "Ford",
    model: "Mustang Mach E",
    color: "black",
  };
  dream_car.color = "red"; // Change color prop with a string value of red
  dream_car.price = "$42,995"; // Add a price prop to the dream_car array
  document.getElementById("Constant").innerHTML =
    "The cost of the " + dream_car.model + " is " + dream_car.price; // set the innerHTML prop with an element with a id of "Constant" to a string and concatenate it with the model prop and price prop of dream_car
}

{
  let x = 10; // Within the scope declared variable of x with an assigned value of 10
  document.getElementById("let").innerHTML = "<br />" + x; // sets the innerHTML prop with an element with a id of "let" and assign the string with a break tag inside and concatenate with the variable of x
}
let dream_car = {
  // declare varaiable of drema_car object with props
  make: "Jeep", // declare make prop and assign it a string
  model: "Gladiator",
  year: "2024",
  color: "black",
  statement: function () {
    // declare a statement prop and assign it a method that returns some props concatenated with a string
    return (
      "The " +
      this.year +
      " " +
      this.make +
      " " +
      this.model +
      " is my dream car when I make enough money to buy a new car."
    );
  },
};
document.getElementById("car_object").innerHTML = dream_car.statement(); // sets the innerHTML prop with any elements with a id of car_object and assign it to the dream_car object statement property
