import Spaceship from './Spaceship.mjs'
import CrewMember from './CrewMember.mjs'


let launchpad = (ourShip,crewMembers) =>{
console.log(`yo there ${ourShip.name}`)
console.log(crewMembers)
ourShip.loadCrew(crewMembers)

}


let trainCrew=(listOfNames)=>{
let people =[]
listOfNames.forEach((name)=>{
let newPerson = new CrewMember(name)
people.push(newPerson)
newPerson.trained = true

})
return people
}

let ourShip = new Spaceship('leslie')

let crewNames = ['leslie',  'nate', 'kasjdh']
let arrayOfNames = trainCrew(crewNames)
launchpad(ourShip,arrayOfNames)
