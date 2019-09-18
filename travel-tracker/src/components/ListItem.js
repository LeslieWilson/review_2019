import React, {useState} from 'react';

const ListItem = props =>{
    const[strikeThrough, setStrikeThrough]=useState('visible')

const changeStrikeThrough = event => {
    event.preventDefault()
    if (strikeThrough ==  'hidden'){
        setStrikeThrough('visible')}
        else{
            setStrikeThrough('hidden')}
        }



        return(

            <div className = 'whatever'>
            <p onClick = {changeStrikeThrough} className={strikeThrough}>{props.name}</p>

            </div>
        )

}


export default ListItem;
