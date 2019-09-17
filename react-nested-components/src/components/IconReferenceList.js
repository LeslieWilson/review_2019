import React from "react";
import Icon from "./Icon";

const IconReferenceList = props => {

  let articleDescription = `lakjsdhfksjfh`

 let  listOfIcons = [

    <Icon
          key = '1'
          iconName="Article"
          fontAwesomeSymbol='fa-file-text-o'
          description={articleDescription}
        />
]

  return (
    <div>
      <ul>
      {listOfIcons}
      </ul>
    </div>
  )
}

export default IconReferenceList
