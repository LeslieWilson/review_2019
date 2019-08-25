class Spaceship{
    constructor(name){
    this.name = name
    this.crew = []
    }

     loadCrew(CrewMembers){
        CrewMembers.forEach((member)=>{
        this.crew.push(member)
        console.log(`${member.name} has boarded the ship!`)
        })

    }

}

export default Spaceship;
