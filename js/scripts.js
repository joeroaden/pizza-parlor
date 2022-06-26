// Business Logic
function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}
Pizza.prototype.chooseToppings = function (){
  this.toppings = toppings;
}
Pizza.prototype.chooseSize = function (size) {
  this.size = size;
};

Pizza.prototype.calculatePizzaPrice = function () {
  let basePrice = 20;
  if (this.size === "Medium") {
    basePrice += 5;
  } else if (this.size === "Large") {
    basePrice += 10;
  }
  let price = 0 + basePrice;
  this.price = price;
  return price;
};

// UI Logic
$(document).ready(function () {
  let pizza = new Pizza ();
  $("#buy-button").click(function (event) {
    event.preventDefault();
    let toppings = $("#topping").val();
    //pizza.chooseToppings(toppings);
    let size = $("input:radio[name=size]:checked").val();
    pizza.chooseSize(size);
    $("#your-pizza").text(toppings);
    $("#pizza-price").text(pizza.calculatePizzaPrice());
    $("#pizza-price-msg").show();
  });
});
