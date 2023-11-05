function My_First_Function() {
  var str1 = "This is the button text!";
  var str2 = "This is the second button text!";

  document.getElementById("Button_Text").innerHTML = str1 + " " + str2;
}

function My_Second_Function() {
  var statement = "I am tired";
  statement += " from working a lot!";
  document.getElementById("Concatenate").innerHTML = statement;
}
