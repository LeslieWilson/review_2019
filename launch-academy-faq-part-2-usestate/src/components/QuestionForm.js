import React, { useState } from 'react'

const QuestionForm = (props) =>{
    const[question, setQuestion] = useState({
        question:"",
        answer: ""
    })

    const handleChange = (event) =>{
        setQuestion({
            ...question,
            [event.currentTarget.id]:event.currentTarget.value
        })

    }


    const handleSubmit = (event) =>{
        event.preventDefault()
        props.addQuestion(question)
        setQuestion({
            question: "",
            answer: ""
        })
    }

    // what is props .addquestion doing??

return(
    <form className = "form" id = "question-form"
    onSubmit = {handleSubmit}>
    <h1> submit faqs</h1>
    <div>
    <label
    htmlFor = "question">
    Question: </label
    >
    <input type = "text"
    id = "question"
    name = "question"
    value = {question.question}
    onChange = {handleChange}
    />
    </div>

    <div>
    <label
    htmlFor = "answer">
    Answer:</label>
    <input type = "text"
    id = "answer"
    name = "answer"
    value = {question.answer}
    onChange = {handleChange}
    />
    </div>

    <div>
    <input  className = "button"
    type = "submit" value = "Submit here!"
    />
    </div>
    </form>
)}

export default QuestionForm
