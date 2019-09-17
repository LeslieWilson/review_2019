import React from "react"
import ReactDOM from "react-dom"

import style from "./styles/app.scss"

import Wrapper from "./components/Wrapper"
import Picture from "./components/Picture"
import List from "./components/List"
import Numbers from "./components/Numbers"

let wrapperParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ullamcorper nibh, id efficitur eros. Suspendisse ultricies est ut mi volutpat, quis faucibus sem malesuada. Pellentesque pellentesque ex at posuere viverra. Nunc maximus massa nec lectus malesuada sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget malesuada tortor."

let numbersParagraph = 'Todays date is <strong>&nbsp;{date}&nbsp;</strong> and <em>&nbsp;{random}&nbsp;</em> is a random number.'

let date = (new Date).toString()
let random = parseInt(Math.random() * 100)
let array = ['Asteroids', 'Comets', 'Moon', 'Planets', 'Stars', 'Sun']
ReactDOM.render(
  <div>
    <Wrapper
    header = "I Am the Wrapper"
    paragraph = {wrapperParagraph}
    />
    <Picture
    header = "Look at This Picture"
    src = 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'
    />
    <List
    leslie = {array}
    />
    <Numbers
    header = 'Todays Date and Random Number'
    paragraph = {numbersParagraph}
    />
  </div>,
  document.getElementById("app")
)
