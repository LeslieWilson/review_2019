import Spaceship from './Spaceship.mjs'
import CrewMember from './CrewMember.mjs'



let launch = (ship, CrewMembers) =>{
console.log(CrewMembers)
console.log(`hey there dude, your name is ${ourShip.name}`)
}


let trainCrew = (list)=>{
let people = []
crewNames.forEach((person)=>{
let newPerson = new CrewMember(person)
people.push(newPerson)
newPerson.trained = true
})
return(people)
}



let ourShip = new Spaceship('bessy')


let crewNames = ['nate', 'braden', 'maf', 'larisa', 'jose', 'eleeza', 'nisha', 'eric']

let arrayOfCrewMembers = (trainCrew(crewNames))

launch(ourShip,arrayOfCrewMembers)
