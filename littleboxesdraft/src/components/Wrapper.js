import React from 'react';

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
</div>
  )
}

export default Wrapper;
