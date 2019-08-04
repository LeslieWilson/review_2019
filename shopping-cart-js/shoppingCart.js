let apple = {
    itemName:"apple",
    quantity: 1
},

    tomato = {
    itemName:"tomato",
    quantity:4
},

    kale  = {
    itemName:"kale",
    quantity:3
},


shoppingCart = [apple,tomato,kale]


shoppingCart.forEach((item)=>{
console.log(item.quantity +" "+ item.itemName)
})
