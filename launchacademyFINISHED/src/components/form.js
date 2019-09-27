import React, { useState } from 'react'


const Form = props =>{
  const [userQuestion, setUserQuestion] = useState({
    question: "",
    answer: ""
  })

  const handleFaqEvent = event => {
    setUserQuestion({
      ...userQuestion,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    props.faqEventHandler(userQuestion)
    setUserQuestion({
      question: "",
      answer: ""
    })
  }

  return (
    <form className="form" id="question-form" onSubmit={onSubmit}>
      <h1>Submit Your Own FAQ!</h1>
      <div>
        <label htmlFor="question">Question:</label>
        <input type="text" id="question" name="question" value={userQuestion.question} onChange={handleFaqEvent}/>
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
        <input type="text" id="answer" name="answer" value={userQuestion.answer} onChange={handleFaqEvent}/>
      </div>
      <div>
        <input type="submit" className="button" value="Submit " />
      </div>
    </form>
)}

export default Form
