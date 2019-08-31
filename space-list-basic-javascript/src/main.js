// Meets Expectations


let researcherSpaceItems = [ new SpaceItem("rock", .50, 5), new SpaceItem("insect", 2.00, 2), new SpaceItem("twig", 2.50, 4), new SpaceItem("plant", 2.00) ]




let summary=(array)=>{
let sum = 0.00
let string = ''
string += 'I bought you: \n \n'
researcherSpaceItems.forEach((item)=>{
    if (item.quantity > 1){
    item.name += 's'
}
sum += item.price * item.quantity
string += `${item.quantity} ${item.name} - ${item.price.toFixed(2)}\n`



    })

string += `You owe me ${sum.toFixed(2)}`
return string
}







console.log(summary(researcherSpaceItems))


// Optional
let inventoryLab1 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 3,
  insect: 1,
  soilSample: 5
};

let inventoryLab2 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 6,
  insect: 10,
  soilSample: 5
};

// module.exports=inventoryLab1
