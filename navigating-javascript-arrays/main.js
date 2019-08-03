let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]

let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

let stockCheck = (checklist, suppliesArray) => {
  let missingItems = []

  checklist.forEach((supplyItem) => {
    if(!suppliesArray.includes(supplyItem)){
      missingItems.push(supplyItem)
    }
  })


let addMissingSupplies = (supplies,missingSupplies)=>{
    return supplies.concat(missingSupplies)

}
let missingSupplies = stockCheck(inventoryChecklist, supplies)

console.log(addMissingSupplies(supplies, missingSupplies))





















// let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]


// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."

// Your code here....

// let supplyCheck=(supplies)=>{
//     supplies.forEach((item) => {
//         console.log(`${item.toUpperCase()} is logged and accounted for`)
//     });
//
// }
// console.log(supplyCheck(supplies))

// other way to do it
// let supplyCheck=(supplies)=>{
//  let string = ""
//     supplies.forEach((item) => {
//         string += item
//     });
//     return string
// }
//
// console.log(supplyCheck(supplies))




// 2.) Create a function named stowSupplies that takes in our array of supplies, and returns item name and its index number in a formatted string.

// let stowSupplies= (supplies) =>{
//     supplies.forEach((item, index) => {
//         console.log(`item name is ${item} index is ${index}`)
//     });
// }
//
//
// console.log(stowSupplies(supplies))

// 3.) Create a function named addAlphabetically that takes in our array of supplies and a new supply item and returns an array of supplies with that new item, sorted alphabetically.
//
// let addAlphabetically = (supplies, i) =>{
//         supplies.push(i)
//         supplies.sort()
//
//         return(supplies)
//
// }
// //
// console.log(addAlphabetically(supplies, "laser pistol"))

// 4.) Create a function named stockCheck that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.


// let stockCheck = (inventoryChecklist, supplies) =>{
//     let missingItems = []
//
//     inventoryChecklist.forEach((supplyItem)=>{
//         if(!supplies.includes(supplyItem)){
//             missingItems.push(supplyItem)
//         }
//     })
//     return missingItems
// }




// let stockCheck = (inventory,supplies) =>{
//     let checked = supplies.map((item) =>{
// if(!inventoryChecklist.includes(item)){
//  checked.push(supplyItem)
// }
//
//     });
//     return inventoryChecklist
//
// }


// -----
// let stockCheck = (inventory, supplies) =>{
//     supplies.forEach((item) =>{
//         supplies.filter(inventory);
//     }
// )}
// -----
// function checkAdult(age) {
//   return age >= 18;
// }
//
// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.filter(checkAdult);
// }
//
//
// -----
//
// let stockCheck = (inventory, supplies) =>{
//     supplies.forEach((item) =>{
//         if (inventoryChecklist.includes(item)){
//         inventoryChecklist.delete(item)
//
//
//     }
//
//
//     });
// return(inventoryChecklist)
// }

//
// let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]
// //
// console.log(stockCheck(inventoryChecklist, supplies))

// 5.) Create a function named addMissingSupplies that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your stockCheck method to help you with this.



// let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]
//
// let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]
//
// let stockCheck = (inventoryChecklist, supplies) =>{
//     let missingItems = []
//
//     inventoryChecklist.forEach((supplyItem)=>{
//         if(!supplies.includes(supplyItem)){
//             missingItems.push(supplyItem)
//         }
//     })
//     return missingItems
// }
//
//
// let addMissingSupplies = (supplies,moreSupplies)=>{
//     return supplies.concat(moreSupplies)
// }
//
//
//
//
// console.log(addMissingSupplies(supplies, missingSupplies)
