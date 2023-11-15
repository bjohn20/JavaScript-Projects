function displayFood(person) {
  var personType = person.getAttribute("data-person-type");
  alert(personType + " likes " + person.innerHTML + " type of food.");
}
