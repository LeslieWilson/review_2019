// Your code goes here!
let todo = ['write', 'read', 'listen']


let unorderedList = document.getElementById('todo')

todo.forEach(function(todo){
    unorderedList.innerHTML =+ <li> ${todo} </li>
})
