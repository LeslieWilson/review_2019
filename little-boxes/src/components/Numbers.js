import React from 'react';

const Numbers = props => {

  return (
    <div className='box numbers'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default Numbers;
