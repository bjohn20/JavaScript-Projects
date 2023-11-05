function my_Dictionary() {
  // Define the function
  var water = {
    // Assign a variable to a dictionary
    type: "Distilled", // Assign a kvp
    brand: "Kroger", // Assign a kvp
    taste: "flat", // Assign a kvp
    price: 1.99, // Assign a kvp
  };
  delete water.price; // Use the delete operator to remove the price KVP
  document.getElementById("Dictionary").innerHTML = water.price; // Use the document.getElementById method to select the html element with the id of Dictionary to display the KVP which output will be undefined
}
