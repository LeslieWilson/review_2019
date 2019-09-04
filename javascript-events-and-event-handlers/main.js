// Your code goes here!
let text = document.getElementById('changing-color-text')
text.addEventListener('click', (event) => {
let colors = ['Aqua', 'Blue', 'Orange', 'Green', 'Red', 'LightSteelBlue']
let index = Math.floor(Math.random() * colors.length)
let color = colors[index]
event.target.style.color = color
});
