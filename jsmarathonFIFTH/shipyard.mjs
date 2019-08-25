import Spaceship from  './Spaceship.mjs'
import CrewMember from './CrewMember.mjs'

let launchpad =(ship, crewMembers)=>{
console.log(crewMembers)
console.log(`ready to blast off dude, the name is  ${ourShip.name}`)
}



let trainCrew=(listOfNames)=>{
let people = []
crewNames.forEach((person)=>{
let newPerson = new CrewMember(person)
people.push(newPerson)
newPerson.trained = true
})
return people

}

let crewNames = ["leslie", "wilson", "three"]

let arrayOfCrewmembers = trainCrew(crewNames)

let ourShip = new Spaceship('bessy')
launchpad(ourShip, arrayOfCrewmembers)
