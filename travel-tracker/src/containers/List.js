import React from 'react'
import ListItem from '../components/ListItem'

const List = (props) => {

let information = props.data.places.map(info =>{
    return(
        <ListItem
        key = {info.id}
        name = {info.name}
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
