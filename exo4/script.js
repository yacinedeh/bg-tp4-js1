const product = {name: "keyboard", price:45 , quantity: 10 }
let stock_value = product.price * product.quantity;
console.log(product.name + "stock value" + stock_value)

let catalog = [
  { name: "Keyboard", price: 45, quantity: 10 },
  { name: "Mouse", price: 20, quantity: 25 },
  { name: "Monitor", price: 180, quantity: 5 },
  { name: "Headset", price: 70, quantity: 8 },
  { name: "Webcam", price: 55, quantity: 12 },
];


let sum = 0;
for (let i = 0; i < catalog.length; i++) {
  sum = sum + catalog[i].price;
}
let average = sum / catalog.length;
console.log("average price " + average)


for(let i=0 ; i < catalog.length ; i++){
    if(catalog[i].price > average){
        console.log(catalog[i].name + "is above average price")
    }
}

let sum2 = 0;
for(let i = 0 ; i < catalog.length ; i++){

}

let total_q = catalog.reduce(function(total,p){
    return total + p.quantity;
},0)

let total_v = catalog.reduce(function(total,p){
    return total + p.price * p.quantity;
},0)

console.log("Total items:", totalItems);
console.log("Total value:", totalValue);

function applyToAll(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i]);
  }
}

function showName(p) {
  console.log(p.name);
}

function showPrice(p) {
  console.log(p.price);
}

applyToAll(catalog, showName);
applyToAll(catalog, showPrice);


