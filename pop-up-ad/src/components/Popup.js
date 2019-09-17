import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faTimes)




const Popup = props => {
let handleExit=()=>{
    confirm('do you want to see sway?')
}

let stopSubmit = (event) =>  {
    event.preventDefault();
    console.log("submitted")
}

let form =(
    <div id = 'div-form' onClick ={stopSubmit}>

    <form id = 'whateverform' className='whateverform'>
    <label>
      <input type="text" name="firstname" />
    </label>
      <input type="submit" name="lastname" />
    </form>
    </div>
)

let timesIcon = (


    <div className ='icon' onClick = {handleExit}>
    <FontAwesomeIcon icon = 'times' className="times-icon" size='lg'/>
    </div>

)

  return(

    // <div onClick = {handleExit}>
    <div>
    {timesIcon}
    {form}
    <h1>laksdjf</h1>
    </div>


  );

};

export default Popup
