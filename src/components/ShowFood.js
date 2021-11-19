import React from "react";

const Foodbox = (props) => {

    return (
      <div>
    {props.foodArr.map(food => {
      return (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories} calories</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number"
          onChange={(e) => {
            props.updateQuantity(food.name, e.target.value)
          }}

          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={() => {
            props.saveFood(food)}}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
      )})}
</div>
    )
    
}

export default Foodbox