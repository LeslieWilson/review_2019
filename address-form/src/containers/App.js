import React, { useState } from "react"

import AddressForm from "../components/AddressForm"

const App = props => {
    const[shippingAddress, setShippingAddress]= useState("")
 

  return (
    <div className="row">
      <div className="medium-6 medium-offset-3 small-12 columns">
        <AddressForm />
      </div>
    </div>
  )
}

export default App
