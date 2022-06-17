// Business Logic
function Pizza(mushroom, garlic, artichoke, large, medium) {
  this.mushroom = mushroom;
  this.garlic = garlic;
  this.artichoke = artichoke;
  this.large = large;
  this.medium  = medium;
  this.pizzaPrice = this.calculatePizzaPrice();
}


