import React from 'react';

const Picture = props => {
  return (
    <div className='box picture'>
      <h1>{props.header}</h1>
      <img alt='Clever EEs' src = {props.src} />
    </div>
  )
}

export default Picture;
