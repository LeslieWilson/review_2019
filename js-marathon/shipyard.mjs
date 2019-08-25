
import Spaceship from './Spaceship.mjs';
import CrewMember from './CrewMember.mjs';



let launchpad =(ship, CrewMembers)=>{
console.log(CrewMembers)
    console.log(`the name of your ship is ${ship.name}`)
    ship.loadCrew(CrewMembers)
}


let trainCrew =(crewNames)=>{
let people = []
crewNames.forEach((person)=>{
let newPerson = new CrewMember(person)
people.push(newPerson)
newPerson.trained = true
})
return (people)
}

let ourShip = new Spaceship('leslieship')
let crewNames=["jessy", "james", "jill"]


let arrayOfCrewMembers = (trainCrew(crewNames))
launchpad(ourShip,arrayOfCrewMembers)
