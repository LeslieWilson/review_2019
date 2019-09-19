import "./main.scss"
import React from "react"
import ReactDOM from "react-dom"
import Feed from "./containers/Feed"
import data from "./constants/data"

ReactDOM.render(
  // note currently this only passes down the first faq
  <Feed data={data}/>,
  document.getElementById("app")
)
