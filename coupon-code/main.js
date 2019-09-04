// your code, here
let text = document.getElementById('coupon-code')


text.addEventListener('click', (event)=>{
text.innerHTML = '50OFF-YOWZA'
})

event.target.style.text = text
