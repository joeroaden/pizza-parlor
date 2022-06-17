// Business Logic
function Pizza(mushroom, garlic, artichoke, large, medium) {
  this.mushroom = mushroom;
  this.garlic = garlic;
  this.artichoke = artichoke;
  this.large = large;
  this.medium  = medium;
  
};

let pizzaOne = new Pizza();
  

Pizza.prototype.calculatePizzaPrice = function() {
  //const basePrice = 10;
  let output = 10;
  
  return output;

  };
  
  





// UI Logic
$(document).ready(function() {
  $("#buy-button").submit(function(event) {
    event.preventDefault();
    const topping = $("#topping").val();
    const size = $("#size").val();
    let finalPizza = pizzaOne.calculatePizzaPrice();
    $("#pizza-price-msg").text(finalPizza);
    //return new Pizza(mushroom, garlic, artichoke, large, medium);
  });
});




