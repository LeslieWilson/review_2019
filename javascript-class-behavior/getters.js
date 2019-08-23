/*
# Learning Goals
- Justify the need for classes in Object Oriented Programming
- Declare a JavaScript class
- Build and invoke a JavaScript constructor
- Implement reader methods for a class
*/

// let smallRectangle = {
//   width: 1,
//   height: 2
// }
//
// let largeRectangle = {
//   width: 500,
//   height: 1500
// }

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

area(){
    return this.width *  this.height
}

perimeter(){
    return this.width * 2 +  this.height * 2
}

doubleHeight(){
    this.height = this.height * 2
}
}

let smallRectangle = new Rectangle(1,2)
console.log(smallRectangle.area())
let largeRectangle = new Rectangle(500,1500)
console.log(largeRectangle.area())
console.log(largeRectangle.doubleHeight())
console.log(largeRectangle.area())
debugger
