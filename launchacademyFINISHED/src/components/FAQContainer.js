import React, { useState, useEffect } from 'react';
import Question from './Question';
import Form from './form';

const FAQContainer = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])  //sets State

  useEffect(() => {
    fetch('/api/v1/questions')
    .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`, //Fetch Get data to populate questions. Passed down to Question component on line 72
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    setQuestions(body);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
},[])


  const faqEventHandler = faqRecord => {
    fetch('/api/v1/questions', {
    method: 'POST',
    body: JSON.stringify(faqRecord)
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
       error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    setQuestions([
      ...questions,
      body])
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)                    //
    }
    else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => { toggleQuestionSelect(question.id) }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}            //Question tiles that possess questions/answers
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <div className='question-list'>
        {questionListItems}
      </div>
      <Form
      faqEventHandler={faqEventHandler}
      />
    </div>
  )

}

export default FAQContainer;
