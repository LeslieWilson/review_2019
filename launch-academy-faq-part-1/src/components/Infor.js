
import React, {useState} from 'react';

const Infor = props =>{
const [questionVisibility, setQuestionVisibility]= useState('hidden')


    const changeVisibility = event => {
        event.preventDefault()
        if (questionVisibility == 'hidden'){
        setQuestionVisibility('visible')}
        else{
        setQuestionVisibility('hidden')}
    }




    return(

        <div className = 'blah'>
        <button className = 'button' onClick = {changeVisibility}> + </button>
        <p>{props.question}</p>
        <p className={questionVisibility}>{props.answer}</p>



        </div>
    )
}

export default Infor;
