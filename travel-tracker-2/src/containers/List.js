import React, {useState} from 'react'
import ListItem from '../components/ListItem'

const List = (props) => {
    const[strikeThroughId, setStrikeThrough]=useState(null)

    let information = props.data.places.map(info =>{
        let strikeThroughStatus
        if(info.id == strikeThroughId){
            strikeThroughStatus = true
        }else {
            strikeThroughStatus = false
        }

        const changeStrikeThrough = () => {
            return setStrikeThrough(info.id)
        }

        return(
            <ListItem
            key = {info.id}
            name = {info.name}
            strikeThroughStatus  = {strikeThroughStatus}
            changeStrikeThrough = {changeStrikeThrough}
            />
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

export default List;
