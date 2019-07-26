// YOUR CODE HERE
let name = prompt("whats your name?")

let number = parseInt(prompt("enter a number now"))


let randomNumber = Math.floor((Math.random() * 10 ) + 1);
debugger


let outcome = ""

if (randomNumber === number){
outcome = ("WON")

}else{
     outcome = ("LOST")
}

alert(`ok, ${name}your guess ${number} made you ${outcome}`)

//
// let name = prompt("whats your name?")
//
// let number = prompt("enter a number now")
//
// let randomNumber = Math.floor((Math.random() * 10 ) + 1);
//
// if (randomNumber === number){
//
// console.log("you won!")
//
// }else{
//
//     console.log("you lost!")
// }
