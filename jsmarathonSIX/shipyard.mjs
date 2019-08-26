import Spaceship from "./Spaceship.mjs"
import CrewMember from "./CrewMember.mjs"

let launchpad =(ship, CrewMembers)=>{

ship.loadCrew(CrewMembers)
}

let trainCrew=(crewnames)=>{
let people = []
crewnames.forEach((person)=>{
let newPerson = new CrewMember(person)
people.push(newPerson)
newPerson.trained = true
})
return (people)
}

let crewMembers = ["leslie", "nate", "george"]


let arrayOfCrewmembers = trainCrew(crewMembers)
let ourShip = new Spaceship('bessy')

launchpad(ourShip,arrayOfCrewmembers)

loadCrew()
