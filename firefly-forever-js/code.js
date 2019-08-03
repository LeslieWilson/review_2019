let crewMembers = ["River", "Zoe", "Wash", "Mal", "Book", "Jayne"]

let quotes = [
  [
    "No power in the Verse can stop me.",
    "I can kill you with my brain.",
    "My food is problematic.",
    "This whole conclusion is fallacious.",
    "Now they see the sky and they remember what they are."
  ],
  [
    "Sorry, sir. Didn't mean to enjoy the moment.",
    "Is there any way I'm gonna get out of this with honor and dignity?",
    "If it moves, shoot it.",
    "I ain't so afraid of losing something that I ain't gonna try to have it.",
    "Big damn heroes.",
    "We crashing again?"
  ],
  [
    "I am a leaf on the wind. Watch how I soar.",
    "Oh God, oh God, we're all going to die?"
  ],
  [
    "Did something just fly off my gorram ship?",
    "We've done the impossible, and that makes us mighty.",
    "We are just too pretty for God to let us die.",
    "Morbid and creepifying, I got no problem with, long as she does it quiet-like.",
    "I swear, by my pretty floral bonnet, I will end you."
  ],
  [
    "I don't care what you believe in, just believe in it.",
    "A government is a body of people, usually, notably ungoverned.",
    "You don't fix faith, River. It fixes you.",
    "If you can't do something smart, do something right."
  ],
  [
    "We're gonna explode? I don't wanna explode!",
    "Let's be bad guys.",
    "You don't pay me to talk pretty.",
    "You guys had a riot? On account o' me? My very own riot?",
    "Aw, hell, if I had wanted schooling, I would have gone to school.",
    "Not as deceiving as a low down, dirty... deceiver."
  ]
]
//
// Implement these functions to answer the questions below


//
// connect the crew name to the index
// the quote batch equals whatever number information is, and then need to cycle though that and count how many strings there are

// ANSWER FOR NUMBER ONE:
// let numberOfQuotes = (name) => {
// let information = crewMembers.indexOf(name)
// let quoteBatch = quotes[information]
//
// let count = 0
//  quoteBatch.forEach((quote)=>{
//  count += 1
//
//
//  })
//  return(`${name} has ${count} quotes`)
// }
//
// console.log(numberOfQuotes("Zoe"))
//
// console.log(numberOfQuotes("Mal"))



//
// let longestQuote = (name) => {
//

// }
//
// let averageQuoteLength = (name) => {
//
// }

// 1. How many quotes does Mal have? Write a function called `numberOfQuotes` that takes one argument, the name of a character. This function should return the number of quotes that character has. If your function is set up properly you should be able to call `numberOfQuotes("Mal")` and `numberOfQuotes("Zoe")`, and get the Expected Output below:

// Mal has 5 quotes.
// console.log(`Mal has ${numberOfQuotes("Mal")} quotes.`)

// Zoe has 6 quotes.
// console.log(`Zoe has ${numberOfQuotes("Zoe")} quotes.`)

// 2. Which character said `"I am a leaf on the wind. Watch how I soar."`? Write a function called `whoSaidThis` that takes one argument, the quote. This function should return the name of the person who said the quote. If your function is set up properly you should be able to call `whoSaidThis("I am a leaf on the wind. Watch how I soar.")` and `whoSaidThis("Let's be bad guys.")` and get the Expected Output below:

// ANSWER FOR NUMBER 2


// 1.1 Do a search for the sentence using foreach
//  1.2 get the index back where the sentence appears using a method in the foreach  (its a bunch of nested arrays and need to check each and apply method to each)
//
// 2. once the foreach loop  is done, use the number i got back from step 1 and say, crewmember name, and then [] and that would give me the name.
// so use crewmember[3] to grab the name and return it
//
// 3. youre going to get 'Wash' back which is already set below  in the to have the value of a quote

// let WhoSaidThis = (washQuote)={
//     quotes.forEach((batch)=>{
//         if (batch.includes(quote)){
//             return batch.indexOf[quote]
//
//             personWhoSaid = crewmember[quote]
//         }
//
//     })
// }


// let whoSaidThis = (washQuote) => {
//     let quotesBatch.forEach((quote)=>{
//         if (quoteBatch.includes(quote)){
//
// return(`${personWhoSaid} said ${quote}`)
// }
//
// });
// }




// Wash says: I am a leaf on the wind. Watch how I soar.
// let washQuote = "I am a leaf on the wind. Watch how I soar."
// console.log(`${whoSaidThis(washQuote)} says: ${washQuote}`)




// Jayne says: Let's be bad guys.
// let jayneQuote = "Let's be bad guys."
// console.log(`${whoSaidThis(jayneQuote)} says: ${jayneQuote}`)



// ========


// 3. What is River's longest quote? Write a function called `longestQuote` that takes one argument, the name of the character. This function should return the character's longest quote. If your function is set up properly you should be able to call `longestQuote("River")` and `longestQuote("Book")` and get the Expected Output below:
//
// River's longest quote is: Now they see the sky and they remember what they are.
// console.log(`Rivers's longest quote is: ${longestQuote("River")}`)
//
// Book's longest quote is:  A government is a body of people, usually, notably ungoverned.
// console.log(`Book's longest quote is: ${longestQuote("Book")}`)

//
// SUMMARY: What am I looking for?
// I need to be  getting a quote back.
//
//
// ONE find their quotebatch
// quotebatches are associated to a name by index.
//
// TWO find quote inside of quotebatches
//
// THREE find length of quote



// ANSWER FOR NUMBER 3:

let longestQuote = (name) => {
let information = crewMembers.indexOf(name)
let quoteBatch = quotes[information]

quoteBatch.forEach((quote)=>{
    quoteLength = quote.length
})
return quoteLength
}
console.log(`Book's longest quote is: ${longestQuote("Book")}`)

//
//
//  names are associated to quotebatches through index.
//
//  longestquote is going to return the index of a name and the matching quotebatch.
//
// I need to foreach through the batch, then call quote.length on the quotes inside that quotebatch
//
// I need to find the largeest one using a method and return it.
//
// that is the largest sentence.





// ============

// 4. What is Zoe's average quote length? Write a function called `averageQuoteLength` that takes one argument, the name of the character. This function should return the average length of all their quotes. If your function is set up properly you should be able to call `averageQuoteLength("Zoe")` and get the Expected Output below:


// The average length of Zoe's quotes is: 40.
// console.log(`The average length of Zoe's quotes is: ${averageQuoteLength("Zoe")}`)

//
// SUMMARY what am i looking  for? : the average length of a persons quotes
//
// to find the aveerage length of a persons quotes I need to find their quotebatch, add all of their quote lengths up and divide it by how many quotes there are in that batch
//
// ONE find their quotebatch
// 1.1 quotebatches are associated to a name by index.
// 1.2 I need to use averagequote length method to get the  association
//
// TWO the length of quotes in the quotebatch
// 1.1 cycle through the quotebatch using forEach.
// 1.2 find the length of each quote  using the foreach and .length method
// 1.3 use a method to count how many quotes there are  in the entire batch
// 1.4 divide the lengths by the number of quotes and return it as the  average.

// ANSWER TO NUMBER 4:

// let getQuoteBatch = (name) => {
// let information = crewMembers.indexOf(name)
// let quoteBatch = quotes[information]
// return quoteBatch
// }
//
// let averageQuoteLength = (name)=> {
// quoteBatch = getQuoteBatch(name)
//
// total = 0
// quoteBatch.forEach((quote)=>{
//
// quoteLength = quote.length
// total += quote.length
// numberOfQuotes =  quoteBatch.length
// })
// return total/numberOfQuotes
//
// }
//
// console.log(averageQuoteLength('Zoe'))
