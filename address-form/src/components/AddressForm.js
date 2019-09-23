import React, { useState } from "react"

const AddressForm = props => {
const[inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    address: ""
})

const handleChange = event =>{
    setInputFields({
        ...inputFields,
        [event.currentTarget.id]: event.currentTarget.value
    })
console.log(inputFields)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        console.log(inputFields)
        setInputFields({
            ...inputFields,
            firstName: "",
            lastName: "",
            email: "",
            city: "",
            state: "",
            zipCode: "",
            phoneNumber: "",
            address: ""
        })

    }

  return (
    <form className="callout"
    id="shipping-address-form"
    onSubmit={handleSubmit}>

      <h1>Shipping Address</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text"
        id="firstName"
        name="firstName"
        value  = {inputFields.firstName}
        onChange = {handleChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text"
        id="lastName"
        name="lastName"
        value = {inputFields.lastName}
        onChange ={handleChange}
        />
      </div>

      <label htmlFor="address">Address:</label>
      <input type="text"
      id="address"
      name="address"
      value = {inputFields.address}
      onChange = {handleChange}/>

      <div>
        <label htmlFor="city">City:</label>
        <input type="text"
        id="city"
        name="city"
        value=  {inputFields.city}
        onChange = {handleChange}
        />
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input type="text"
        id="state"
        name="state"
        value = {inputFields.state}
        onChange = {handleChange}
        />
      </div>

      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input type="text"
        id="zipCode"
        name="zipCode"
        value= {inputFields.zipCode}
        onChange= {handleChange}
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text"
        id="phoneNumber"
        name="phoneNumber"
        value = {inputFields.phoneNumber}
        onChange= {handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="text"
        id="email"
        name="email"
        value = {inputFields.email}
        onChange = {handleChange}
        />
      </div>

      <input type="submit" className="button" value="Submit " />
    </form>
  )
}

export default AddressForm
