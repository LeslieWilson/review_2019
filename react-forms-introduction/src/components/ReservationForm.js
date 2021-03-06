import React, { useState } from 'react'

const ReservationForm  = props =>{
    const[firstName, setFirstName] = useState("")

    const handleFirstNameChange = event =>{
        event.preventDefault()
        setFirstName(event.currentTarget.value)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        props.onNameSubmitted(firstName)
        setFirstName('')
    }

    return(
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor = "first_name"> your first  Name</label>
        <input
        id = "first_name"
        type = "text"
        value = {firstName}
        onChange = {handleFirstNameChange}
        />
        <input type = "submit" value = "RSPV"  className = 'btn' />
        </div>
        </form>
    )
}

export default ReservationForm
