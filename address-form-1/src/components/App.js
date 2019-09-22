import React, { useState }from "react"

import AddressForm from "./AddressForm"



const App = props => {
const[information, setInformation]=
useState=("")
    const saveInformation = info =>{
        setInfo(list.concat(info))
    }


  return (
    <div className="row">
      <div className="medium-6 medium-offset-3 small-12 columns">
        <AddressForm onInformationSubmitted{saveInfo} />
<AddressForm onInformationSubmitted={saveInformation}
      </div>
    </div>
  )
}

export default App
