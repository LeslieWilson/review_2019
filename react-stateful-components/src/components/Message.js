import React, {useState} from "react"

const Message = props => {
    const [clickCount, setClickCount] = useState[0]


const incrementCount =
event =>{
    event.preventDefault()
    const newClickCount =
    clickCount + 1
    setClickCount(newClickCount)

}

const [keyPressCount, setKeyPressCount] = useState(0)

const incrementKeyPressCount = event =>{
    event.preventDefault()
    const newKeyPressCount = keyPressCount + 1
    setKeyPressCount(newKeyPressCount)
}

  return (
    <div onClick={incrementCount}
    onMouseMove={incrementKeyPressCount}>
      <h1>Message: {props.message}</h1>
      <h1>Click Count: {clickCount}</h1>
      <h1>key press count{keyPressCount}</h1>
    </div>
  )
}

export default Message
