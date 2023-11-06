function Ride_Function() {
  // Define the function that will be called
  var Height, Can_Ride; // Assign variables
  Height = document.getElementById("height").value; // assign variables to method
  Can_Ride = Height < 52 ? "You are too short" : "You are tall enough"; //Assign variable to terenary operator
  document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; // Use method to to attach variable value to html
}

function Able_To_Vote() {
  // Define the function that will be called
  var Age, Can_Vote; // Call variables
  Age = document.getElementById("age").value; // Assign varaible to method that receives element value with a id of age
  Can_Vote = Age >= 18 ? "You are old enough" : "You are too young"; // Assign variable to a terenary operator
  document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; // Use method to select html element with the id of Vote and assign the variable to the html content
}

function student(firstName, age, gpa, major) {
  // define the function and the parameters
  this.student_name = firstName; // Use the this keyword to attach the vproperty to the student object
  this.student_age = age;
  this.student_gpa = gpa;
  this.student_major = major;
}

var Brandon = new student("Brandon", "21", 3.5, "Finance"); // This  os a new instance of the student object above
var Nadia = new student("Nadia", "20", 3.0, "Fashion");
var Zach = new student("Zach", 23, "2.9", "Finance");
function studentInfo() {
  // Define the function
  document.getElementById("New_and_This").innerHTML = // Use the method to select html element with the id of New_and_This and assign the variable to the html element
    "New student came into the classroom name " +
    Brandon.student_name +
    " and his major is " +
    Brandon.student_major;
}

function nested_Function() {
  // Define the function
  document.getElementById("Nest_Function").innerHTML = nested(); // Use the method to select html element with the id of nest_Function and assign the variable to the html element
  function nested() {
    // Define nested function
    var beginning_num = 5; // Assign variable to a value
    function counter() {
      // Define nested function inside of a nested function
      beginning_num += 1; // variable incremented by 1
    }
    counter(); // Call counter method
    return beginning_num; // Return variable value
  }
}
