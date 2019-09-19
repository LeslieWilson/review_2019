import React from 'react'
import Infor from '../components/Infor'

const Feed = (props) => {


let information = props.data.map(info => {
    return(
        <Infor
        key = {info.id}
        question = {info.question}
        answer = {info.answer}

        />


    )
})


  return(


      <div>

      <h3>
       Were here to help you
      </h3>
      {information}
      </div>

  )
}

export default Feed;
