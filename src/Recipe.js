import React from "react";
import "./Recipe.css"

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="receipe">
      <h1>{title}</h1>
      <p>Calorie: {parseInt(calories)}kcal</p>
      <div className="img-div">
      <img className="image" src={image} alt="" />
      </div>

      <ol>
        {ingredients.map(ingredient =>(

            <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
