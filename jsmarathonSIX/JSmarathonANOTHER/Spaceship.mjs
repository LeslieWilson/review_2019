class Spaceship{
constructor(name){
this.name = name
this.crew = []
}

loadCrew(arrayOfNames){
arrayOfNames.forEach((person)=>{
this.crew.push(person)
console.log(`${person.name} has borded`)
})
}
}
export default Spaceship
