let data = require('./data')

// 1)
const numOfRepos = (array) => {
    return data.length
}
console.log('\n1) ' + numOfRepos(data))

// 2)
const largestRepo = (array) => {
    let largestName = ""
    let largestSize = 0
    data.forEach((repo)=>{
        let size=repo.size
        if (largestSize < size){
            largestSize = size
            largestName = repo.name
        }
    })
    return(largestName)
}
console.log('\n2) ' + largestRepo(data))

// 3)
const mostRecentRepo = (array) => {
    let largestNumber = 0
    let largestName = ""
data.forEach((repo)=>{
    let parsedDate = Date.parse(repo.updated_at)
    if (largestNumber< parsedDate){
        largestNumber = parsedDate
        largestName = repo.name
    }
})
return(largestName)

}
console.log('\n3) ' + mostRecentRepo(data))

// 4)
const noGazers = (array) => {
    sum=0
    data.forEach((repo)=>{
    gazingCount = repo.stargazers_count
    if (gazingCount == 0){
        sum += 1
    }
})
return sum
}
console.log('\n4) ' + noGazers(data))

// 5)
const maxGazers = (array) => {
largestNumber = 0
largestName = ""
data.forEach((repo)=>{
let gazingCount = repo.stargazers_count
if (largestNumber < gazingCount){
largestNumber = gazingCount
largestName = repo.name
}
})
return(largestName)

}
console.log('\n5) ' + maxGazers(data))
// 6)
const hasDescriptions = (array) => {
    array =[]

    data.forEach((repo)=>{
        let notNull = repo.hasDescriptions
        let names = repo.name
        if(notNull != "null"){
            array.push(names)
        }
    })
    return(array)

}
console.log('\n6) ' + hasDescriptions(data))

//7)


// let shipColors = ["White", "Black", "Gold", "Silver"]
//
// let ships = shipColors.map((color) => {
//   return color + " spaceship"
// })

const newDescriptionsArray = (array) => {
    let mappedData = data.map((repo)=>{
        return repo.description + "blorg"
    })
    return mappedData
}
console.log('\n7) ' +  newDescriptionsArray(data))

//8)
let keyInfo = (array) => {

}
console.log('\n8) ' +  keyInfo(data))

//9)
let monkeyKeys = (array) => {

}
console.log('\n9) ' + monkeyKeys(data))

//10)
let urlValue = (array) => {

}
console.log('\n10) ' + urlValue(data))

module.exports = { numOfRepos, largestRepo, mostRecentRepo, noGazers, maxGazers, hasDescriptions, newDescriptionsArray, keyInfo, monkeyKeys, urlValue }
