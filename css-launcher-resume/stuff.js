button1 = document.getElementById('button1')
button2 = document.getElementById('button2')



button1.addEventListener("click", function(){

  let projlist = document.getElementsByClassName('projlist')[0]
  projlist.className = 'visible'
});





button2.addEventListener("click", function(){

  let quoteslist = document.getElementsByClassName('quoteslist')[0].getElementsByTagName('li')

    let index = Math.floor(Math.random() * quoteslist.length)

    let quote = quoteslist[index]

      quote.className = 'visible'

});
