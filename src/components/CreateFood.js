import React from "react";

const CreateFood = (props) => {
    const [food, setFood] = React.useState()
    const [image, setImage] = React.useState()
    const [calories, setCalories] = React.useState()


    const structureFood = () => {
        console.log('Food being structured')
const newFood = {
    name: food,
    calories: calories,
    image: image,
    quantity: 0,
}
setFood('')
setImage('')
setCalories('')

props.addFood(newFood)
console.log('Food Structured: ', newFood)
}
    return(
        <div> <article className="media">
        <div className="media-left">
            <input name='imgLink'
                   placeholder='Image Link'
                   value={image}
                   onChange={(e) => setImage(e.target.value)}
                   />
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <input name='foodName'
                     placeholder='Food Name'
                     value={food}
                     onChange={(e) => setFood(e.target.value)}
                     />
              <br />
              <input name='calories'
                     placeholder='Calories'
                     value={calories}
                     onChange={(e) => setCalories(e.target.value)}
                     />
            </p>
          </div>
        </div>
        <button type='button' onClick={structureFood}>Add Food</button>
      </article>
    </div>
    )
}

export default CreateFood