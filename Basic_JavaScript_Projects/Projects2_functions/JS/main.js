function My_First_Function() {
  // Define function and give it a name
  var str1 = "This is the button text!"; // define variable and assign it to a string
  var str2 = "This is the second button text!"; // define variable and assign it to a second string

  document.getElementById("Button_Text").innerHTML = str1 + " " + str2; // Concatenate two variables and attaching the value to the id        "Button_Text"
}

function My_Second_Function() {
  //Defin the function and give it a name
  var statement = "I am tired"; // define a variable and assign it a string
  statement += " from working a lot!"; // Concatenate variable and add another string
  document.getElementById("Concatenate").innerHTML = statement; // Attaching variable value to "Concatenate" id
}
