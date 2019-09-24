import React, { useState } from "react"

import AddressForm from "../components/AddressForm"
import List from "../components/List"

const App = props => {
    const[shippingAddress, setShippingAddress]= useState("")

    const reservePlace = item =>{
            setShippingAddress(items.concat(item))
        }

  return (
    <div className="row">
      <div className="medium-6 medium-offset-3 small-12 columns">

      <List items={items} />
        <AddressForm onItemSubmitted  = {reservePlace}/>
      </div>
    </div>
  )
}

export default App
