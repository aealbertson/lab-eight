// Write a simple shopping list program.
// 1. Create several grocery item objects with properties of name and price.
// 2. Store the grocery item objects in an array.
// 3. Loop through the array and print out the name
// and price on a new line.
// 4. Total up the amount with a label ‘total’.
// Be prepared to demo your work.


var total = 0;

var item1 = {
  name: "cereal",
  price: 2.99,
};

var item2 = {
  name: "milk",
  price: 2.39,
};

var item3 = {
  name: "apples",
  price: 3.99,
};

var groceries = [item1, item2, item3];

for(var i=0; i<groceries.length; i++){
  console.log(groceries[i].name +  " " + (groceries[i].price));
  total = total + groceries[i].price;

}

console.log("$ " + total);
