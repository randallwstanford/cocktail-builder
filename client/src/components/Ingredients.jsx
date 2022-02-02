/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';

function Ingredients({ ingredients, setCocktails, setIngredients }) {
  const clearIngredients = () => {
    setIngredients([]);
    setCocktails([]);
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const ingredient = e.target.ingredient.value;
    if (ingredient.length !== 0) {
      setIngredients([...ingredients, ingredient.charAt(0).toUpperCase() + ingredient.slice(1)]);
      document.getElementsByClassName('addIngredient')[0].value = '';
    }
  };

  const deleteIngredient = (e) => {
    const updatedIngredients = ingredients.filter((ing) => {
      if (ing !== e.target.innerText) return ing;
    });
    if (updatedIngredients.length === 0) setCocktails([]);
    setIngredients(updatedIngredients);
  };
  return (
    <div className="ingredientsContainer">
      <h2>Ingredients:</h2>
      <form onSubmit={addIngredient}>
        <div className="buttons">
          <button type="button" className="ingredient-button" onClick={clearIngredients}>Clear Ingredients</button>
          <button className="ingredient-button" type="submit">Add Ingredient</button>
        </div>
        <input className="addIngredient" type="text" placeholder="add ingredients here!" name="ingredient" />
      </form>
      <div>
        {ingredients.map((ingredient) => (
          <button type="button" className="ingredient" onClick={deleteIngredient}>{ingredient}</button>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;
