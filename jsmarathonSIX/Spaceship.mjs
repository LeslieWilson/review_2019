class Spaceship{
constructor(name){
this.name = name
this.crew = []

}


let loadCrew=(crew)=>{
crew.forEach((person)=>{
this.crew.push(person)
console.log(`${person.name} has boarded the plane`)
})
}
}


let captain=(crew)=>{
let randomIndex = Math.floor(Math.random() * this.crew.length);
let randomElement = this.crew[randomIndex];

console.log(this.crew)


}


export default Spaceship
