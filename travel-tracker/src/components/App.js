import React, { useState } from 'react';

const App = (props) => {

    const[strikeThrough, setStrikeThrough]= useState('visible')

    const changeStrikeThrough = event => {
        event.preventDefault()
        if (strikeThrough ==  'hidden'){
            setStrikeThrough('visible')}
            else{
                setStrikeThrough('hidden')}
            }

    let information = props.data.places.map(info =>{
        return(

            
            <p onClick = {changeStrikeThrough} className={strikeThrough}>{info.name}</p>

        )
    })

  return (
    <div id="wishlist-div">
      <div className="row">
        <div className="small-12 small-centered columns text-center">
          <h3>Wanderlust Wishlist</h3>

        </div>
        {information}

      </div>
    </div>
  )
}

export default App;
