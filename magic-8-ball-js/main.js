let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
//
// console.log(`${responses.length}`)

// Ask the user what their question is, and store it as a variable called `question`
//
// let question = prompt("whats your question?")




// Output a random response to the user's question

// let responseRandom = responses[(`${Math.floor(Math.random()* responses.length)}`)]
//
// console.log(responseRandom)
//

// Output the number of responses that include the word "yes"



//
// i = 0
// while (i < responses.length){
//     console.log(`${responses[i]}`)
//     i++
//     if i.include("yes")
//     console.log(`yes`)
// }


//
// let yeses = responses.includes(response => response === "Yes")
// console.log(`${yeses}`)
//

// let yeses = 0
//
// responses.forEach((i) =>{
// if (i.includes("yes")){
// yeses ++
// }
//
// })
// console.log(`${yeses}`)
//


// Output the number of responses that include the words "no" or "not"
//
// let nos = 0
//
// responses.forEach((i) =>{
// if (i.includes("no") || i.includes("not")){
// nos ++
// }
//
// })
// console.log(`${nos}`)


// Output the alphabetized list of responses


// responses.forEach((response) => {
//     console.log(response.toLowerCase())
//
// })
//
// console.log(responses.sort())
//


// Output the first and last responses from the alphabetized list

// console.log(responses[0])
// console.log(responses.slice(-1).pop())

// Delete two of the negative responses


// responses.forEach((response) =>{
// if (response.includes("no") || response.includes("not")){
//     responses.shift()
// console.log(response)
// }
// })



// Reassign 'Ask again later' to the beginning of the array

// responses.splice(0,0,"Ask again later")
// console.log(responses)

// Add 1 response of your choosing to the current list
//
// responses.splice(2,0,"no way jose")
// console.log(responses)

// Concat an **array** of 3 additional responses to the current list

let more1 = ["blah", "whatever", "stupid"]
moreResponses = more1.concat(responses)

console.log(moreResponses)

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)


console.log(moreResponses.length)
