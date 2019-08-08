let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"]

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"]
]

//List all the teachers with an even index number (including 0)

let evenIndex = () => {
teachers.forEach((teacher)=> {
    let number  = teachers.indexOf(teacher)
    if (number % 2 === 0){
console.log(teacher)
}})
}

evenIndex()


//List all of the teachers with the letter i in their name

let iInName = () => {
    teachers.forEach((teacher)=>{
        if (teacher.includes('i')){
        console.log(teacher)
    }})

}

iInName()

//Return the number of teachers

let teacherCount = () => {
    length = teachers.length
return(length)
}

console.log(teacherCount())

Return the number of rooms of students

let roomCount = () => {
    rooms = rooms.length
        return(rooms)
    }

console.log(roomCount())

// //Return the number of students in all the rooms

let total = 0
let studentCount = () => {
    rooms.forEach((room)=>{
        room.forEach((student)=>{
            total += 1



        })
    })
return total
}

console.log(studentCount())

// //Return the students who have an i in their names


let whichStudents = () => {
    students = ""
    rooms.forEach((room)=>{
        room.forEach((student)=>{
            if (student.includes("i")){
                students += student + (`,`)

            }
        })

    })
return students
}

console.log(`The students who have an 'i' in their name are  ${whichStudents()}`)

//Return the teacher who has the given student in their room




let whichTeacher = (student) =>{
rooms.forEach((room, index)=>{
     if (room.includes(student)){
         teacherIndex = index
     }
    })
    return teachers[teacherIndex]
}



console.log(`The teacher who has Jorge is ${whichTeacher("Jorge")}.`)
console.log(`The teacher who has Alexa is ${whichTeacher("Alexa")}.`)
