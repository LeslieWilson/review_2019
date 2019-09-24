import React, { useState } from "react"
import MealForm from './MealForm'
import MealsList from './MealsList'

const App = props => {
  const [meals, setMeals] = useState([])

  const mealSubmittedHandler = meal =>{
      setMeals([...meals, meal])
  }

  return (
    <div className="row">
      <div className="small-9 small-centered columns">
        <h1 className="text-center">Food Tracker</h1>
        <MealsList meals={meals} />
        <MealForm onMealSubmitted={mealSubmittedHandler} />
      </div>
    </div>
  )
}

export default App
