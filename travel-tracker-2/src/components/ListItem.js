import React, {useState} from 'react';

const ListItem = props =>{

    let countryClassName
    if (props.strikeThroughStatus === true){
        countryClassName = "hidden"
    }

    return(

        <div className = 'whatever'>
        <p onClick = {props.changeStrikeThrough} className={countryClassName}>{props.name}</p>

        </div>
    )

}


export default ListItem;
