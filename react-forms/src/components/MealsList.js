import React from 'react';

const MealsList = props => {
  let mealItems = props.meals.map(meal => {
    return(
      <li key={meal.food}>
        <strong>
          {meal.meal}:
        </strong>
        &nbsp;{meal.food}
      </li>
    )
  });

  return (
    <div>
      <h3 className="text-center">Daily Consumption</h3>
      <ul>{mealItems}</ul>
    </div>
  );
}

export default MealsList;
