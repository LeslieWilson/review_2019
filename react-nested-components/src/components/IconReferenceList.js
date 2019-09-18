import React from "react";
import Icon from "./Icon";

const IconReferenceList = props => {

 let articleDescription = `lakjsdhfksjfh`
 let  iconInfo = [
    {
          key:"1",
          iconName:"Article",
          fontAwesomeSymbol:'fa-file-text-o',
          description:"article description"
      },

      {
        key:'2',
        iconName:"Excercise",
        fontAwesomeSymbol:"fa-heartbeat",
        description: "Excercise Description"
      }
]

let icons = iconInfo.map(icon =>{
  return (
    <Icon
    key={icon.key}
    iconName={icon.iconName}
    fontAwesomeSymbol={icon.fontAwesomeSymbol}
    description={icon.description}
    />
  )
})

return(
    <div>
    <ul>
    {icons}
    </ul>
    </div>
)
}

export default IconReferenceList
