import React from "react"
const List = props => {
  const { items } = props
  const listItems = items.map(item => {
    return <li key={item}>{item}</li>
  })

  return <ul>{listItems}</ul>
}

export default List
