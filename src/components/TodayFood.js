import React from "react";

const TodayFood = (props) => {
let calorieTotal = 0
    return(
        <div>
        <h2>Today's Foods</h2>
        <ol>
        {props.saveArr.map(food =>{
            calorieTotal += food.quantity*food.calories
            return(
                <li>{food.quantity} {food.name} = {food.quantity*food.calories} calories</li>
            )
        })}
        </ol>
        <p>Total: {calorieTotal} calories</p>
        </div>
    )
}

export default TodayFood