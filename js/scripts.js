// Business Logic
function Pizza(mushroom, garlic, artichoke)  {
  this.mushroom = mushroom;
  this.garlic = garlic;
  this.artichoke = artichoke;
  
}

function Order(toppings, sizes) {
  this.toppings = toppings;
  this.sizes = sizes;
}

function Sizes(large, medium) {
  this.large = large;
  this.medium = medium;
}

let pizzaOne = new Pizza();

Sizes.prototype.calculatePizzaPrice = function () {
  let basePrice = 10;
  let output = [basePrice];
  if (this.large) {
    output[0] +5;
    return output;
  }

};
console.log(output)

// UI Logic
$(document).ready(function () {
  $("#buy-button").submit(function (event) {
    event.preventDefault();
    pizzaOne.calculatePizzaPrice();
    //const topping = $("#topping").val();
    const size = $("#size").val();
    let finalPizza = calculatePizzaPrice(size);
    $("#pizza-price-msg").text(pizzaOne.large);
    //return new Pizza(mushroom, garlic, artichoke, large, medium);
  });
});
