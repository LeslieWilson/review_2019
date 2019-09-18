import React from "react";
import Grocery from "./Grocery";


const GroceryReferenceList = props => {

    let groceryList = [

        {
            key:'1',
            groceryName:'Orange'

        },

        {
            key:'2',
            groceryName:'Banana'
        },

        {
            key:'3',
            groceryName:'Bread'
        }
    ]


let listItems  =  groceryList.map(item =>{
    return(
        <Grocery
        key = {item.key}
        groceryName = {item.groceryName}
        />
    )
})

return(
    <div>
    <ul>
    {listItems}
    </ul>
    </div>
)

}

export default GroceryReferenceList
