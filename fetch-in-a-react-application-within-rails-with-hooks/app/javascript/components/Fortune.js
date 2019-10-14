import React, { useState, useEffect } from "react"

const Fortune = () => {
  const [getFortune, setFortune] = useState("")
  const [getNewFortune, setNewFortune] = useState("")

  let fetchFortune = () => {
    fetch("/api/fortune.json")
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        let fortune = body.fortune.text
        setFortune(fortune)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  useEffect(()=>{
      fetchFortune()
  }, [])

 const handleClick = () => {
     fetchFortune()
 }

 let handleChange = (event) => {
     setNewFortune(event.currentTarget.value)
 }

let handleSubmit = (event) =>{
    event.preventDefault()
    let formPayload = {
        fortune: getNewFortune
    }
fetch("/api/fortune", {
    credentials: "same-origin",
    method : "POST",
    body: JSON.stringify(formPayload),
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})
.then(response =>{
    if (response.ok) {
        return response
    } else{
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
    }
})
    .then(response => response.json())
    .then(body =>{
        let newFortune = body.fortune.text
        setFortune(newFortune)
    })
    .catch(error => console.error (`Error in fetch: ${error.message}`))
}
  return (
      <>
    <h1>Your Fortune: {getFortune}</h1>
    <button className="button" onClick ={handleClick}> click for new fortune  </button>
    <form onSubmit={handleSubmit}>
    <label>New Fortune:</label>
    <input
    type = "text"
    value = {getNewFortune}
    onChange = {handleChange}
    />
    <input type = "submit" value="submit" />
    </form>
    </>

  );
}

export default Fortune
