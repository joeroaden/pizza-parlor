// Business Logic
function Pizza(toppings, size, price)  {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
  
}

Sizes.prototype.calculatePizzaPrice = function () {
  let basePrice = 10;
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
    //pizzaOne.calculatePizzaPrice();
    const topping = $("#topping").val();
    const size = $("#size").val();
    let finalPizza = calculatePizzaPrice(size);
    $("#pizza-price-msg").text(pizzaOne.large);
    //return new Pizza(mushroom, garlic, artichoke, large, medium);
  });
});
