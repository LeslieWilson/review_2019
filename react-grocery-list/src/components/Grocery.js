import React from 'react'

const Grocery = props =>{
    let itemName = props.groceryName

    let foodAlert = (event) =>{
        alert('Button was clicked')}
    }


    return(
        <li>
        {itemName}
        <button type = "button" onClick={foodAlert}>Delete</button>
        </li>
    )
}




export default Grocery
