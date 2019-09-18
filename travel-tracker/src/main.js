import React from "react"
import ReactDOM from "react-dom"

import styles from "./stylesheets/app.css"
import data from "./constants/data"

import List from "./containers/List"


ReactDOM.render(
  <List data={data} />,
  document.getElementById("app")
)
