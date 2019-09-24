import React, { useState } from 'react'

const ReviewForm = props =>{
    const[inputFields, setInputFields]=
    useState({
        name: "",
        score: "",
        review: ""

    })

    const handleChange = event =>{
        setInputFields({
            ...inputFields,
            [event.currentTarget.id]:event.currentTarget.value
        })
        console.log(inputFields)
    }

const handleSubmit = event =>{
    event.preventDefault()
    props.onInputSubmitted(inputFields)
    setInputFields({
        ...inputFields,
        name: "",
        score: "",
        review: ""

    })
}

return(
<form className= "callout"
id = "form" onSubmit ={handleSubmit}>
<h1>BLAH</h1>
 <div>
            <label
            htmlFor= "name">
            NAMELESLIE:</label>
            <input type="text"
            id ='name'
            name= 'name'
            value = {inputFields.name}
            onChange= {handleChange}
                />
</div>

<div>
           <label
           htmlFor= "score">
           Score:</label>
           <input type="text"
           id ='score'
           name= 'score'
           value = {inputFields.score}
           onChange= {handleChange}
               />
</div>

<div>
  <label
  htmlFor = "review">
  Review:</label>
  <input type="text"
  id = "review"
  name = "review"
  value = {inputFields.review}
  onChange={handleChange}
  />
</div>

<input type = "submit" className="button"  value="Submit" />


</form>

)}

export default ReviewForm
