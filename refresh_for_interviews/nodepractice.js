// Reading for javascript:
//
//  https://learn.launchacademy.com/teams/alumni/curricula/ignition-boston-26/lesson_groups/week_4:_javascript_and_o_o_p/lessons/intro-to-oop-in-js
//
//  Basic Object Javascript:
//
//  Make a Leslie object with object literal notation.

let leslie = {
 last_name: "wilson",
 first_name: "leslie",
 height: 56,
 weight: 7709,
fullname() {
  return this.first_name + " " + this.last_name
}

}


console.log(leslie.fullname())
console.log(leslie.height)




 // Give yourself a first_name and last_name.
 //
 // Give yourself a height and weight.
 //
 // Give yourself a function that returns your full name (first name and last name put together) https://learn.launchacademy.com/teams/alumni/curricula/ignition-boston-26/lesson_groups/week_4:_javascript_and_o_o_p/lessons/model-a-person-in-js
 //
 // Log your height and full name to the console.
 //
 //
 // Square:

square={
  side_length:7,
  area(){
    return this.side_length * this.side_length
  },
  perimeter(){
    return this.side_length * 4
  }
}
console.log(square.perimeter())
console.log(square.area())


 https://learn.launchacademy.com/teams/alumni/curricula/ignition-boston-26/lesson_groups/week_4:_javascript_and_o_o_p/lessons/iterating-with-js-objects
