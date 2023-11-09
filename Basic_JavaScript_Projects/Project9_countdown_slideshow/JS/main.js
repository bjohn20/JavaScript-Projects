let slideIndex = 1; // Declare variable
showSlides(slideIndex); // the showSlides function makes a call and and displays the slide at the index which the slideIndex represents

// Next/Previos controls
function plusSlides(n) {
  // Define the plusSlides function with a parameter of n
  showSlides((slideIndex += n)); // showSlides function is called and increments the slideIndex by n
}

// Thumbnail image controls
function currentSlide(n) {
  // Define the currentSlide function with a parameter of n
  showSlides((slideIndex = n)); // The showSlides function is called and it assigns the slideIndex value to the n parameter
}

function showSlides(n) {
  // Define the showSlides function
  let i; // Declare i variable
  let slides = document.getElementsByClassName("mySlides"); // Declare slides variable and set it to the element with a classname of "mySlides"
  let dots = document.getElementsByClassName("dot"); // Declare variable dots and set it to the elements with a classname of "dot"
  if (n > slides.length) {
    // if statement that loops through the slides array with a condition statement, as long as n is greather than slide array execute code below
    slideIndex = 1; // Sets the slideIndex value to 1
  }
  if (n < 1) {
    // if statement with a conditon of if n is less than 1 execute the code below
    slideIndex = slides.length; // sets the slideIndex value to the slide.length
  }
  for (i = 0; i < slides.length; i++) {
    // for loop with a conditon statement that iterates through the slides array
    slides[i].style.display = "none"; // Sets each element of the slides array display property to "none"
  }
  for (i = 0; i < dots.length; i++) {
    // for loop that iterates through the dots array
    dots[i].className = dots[i].className.replace(" active", ""); // Sets each element of the dots array to replace their classname from " active" to blank
  }

  slides[slideIndex - 1].style.display = "block"; // access the slides array at the slideIndex -1 and sets the style.display property to block to display the element
  dots[slideIndex - 1].className += " active"; // Assigns the active class to the dot array at the index of the slide
}
