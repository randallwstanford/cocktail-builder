import { shuffleArray, checkForNaughtyWords } from './utils.js';
import React, { useState, useEffect } from 'react';
import Cocktails from './Cocktails.jsx';
import Saved from './Saved.jsx';
import axios from 'axios';

export default function IngredientsAndCocktails() {

  const [ingredients, setIngredients] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  const clearIngredients = () => {
    setIngredients([]);
    setCocktails([]);
  };

  var getCocktails = () => {
    var parameters = ingredients[0];
    if (ingredients.length > 0) parameters = ingredients.join(',');
    axios.get('/drinks', { params: {ingredient: parameters}})
    .then(response => {
      if (typeof response.data.drinks !== 'string') {
        setCocktails(shuffleArray(checkForNaughtyWords(response.data.drinks)))
      }
    })
    .catch(err => console.log(err));
  };

  const addIngredient = (event) => {
    event.preventDefault();
    var ingredient = event.target.ingredient.value;
    if (ingredient.length !== 0) {
      setIngredients([...ingredients, ingredient.charAt(0).toUpperCase() + ingredient.slice(1)]);
      document.getElementsByClassName("addIngredient")[0].value = '';
    }
  };

  const deleteIngredient = (event) => {
    var updatedIngredients = ingredients.filter((ing) => {
      if (ing !== event.target.innerText) return ing;
    })
    if (updatedIngredients.length === 0) setCocktails([])
    setIngredients(updatedIngredients);
  }

  useEffect(() => {
    getCocktails();
  }, [ingredients])

  return (
    <div>
      <Cocktails cocktails={cocktails}/>
      <Saved />
      <div className="ingredients">
        <h2>Ingredients!</h2>
        <form onSubmit={addIngredient}>
          <div className="buttons">
            <button className="ingredient-button" onClick={clearIngredients}>Clear Ingredients</button>
            <button className="ingredient-button" type="submit">Add Ingredient</button>
          </div>
          <input className="addIngredient" type="text" placeholder="add ingredients here!" name="ingredient"></input>
        </form>
        <div> {ingredients.map((ingredient) => { return (<div className="ingredient" onClick={deleteIngredient}>{ingredient}</div>) })} </div>
      </div>
    </div>
  )
};