 // YOUR CODE HERE
let beer_total = 99

while (beer_total > 1) {

console.log(`${beer_total} bottles of beer on the wall, ${beer_total} bottles of beer,\ntake one down and pass it around`)
beer_total -=1
console.log(`${beer_total} bottles of beer on the wall\n \n`)
}

while (beer_total === 1) {
    console.log(`${beer_total} bottle of beer on the wall. ${beer_total} bottle of beer, \ntake one down and pass it around,`)
    beer_total -=1
    console.log("no more bottles of beer. \n \n")

    console.log("no more bottles of beer on the wall, no more bottles of beer\n go to the store, buy some more, you're a loser who drank 99 beers")
}
