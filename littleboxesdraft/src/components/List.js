import React from 'react';

const List = props => {
let listitems = props.leslie.map(i =>{
    return(
        <li>{i}</li>
    )
})



  return (
    <div className='box list'>
      <h1>Here Is a List</h1>
      <ul>
      <li>{listitems}</li>
      </ul>
    </div>
  )
}

export default List;
