let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]

//
// let coffeeItem = shoppingCart.find((item)=>
// item.itemName ==='lbs. of coffee')
//
// console.log(coffeeItem.quantity)

const tax_rate = 6.24
total = 0
shoppingCart.forEach((item)=>{
  debugger
    total += item.price * item.quantity

})

console.log((total) * (1 +(tax_rate/100)))



 // console.log(coffee.price/10)
 //
 // console.log(milk.quantity)
