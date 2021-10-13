import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { shuffleArray, checkForNaughtyWords, setMaxCocktails } from './utils.js';

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

  useEffect(() => {
    getCocktails();
  }, [ingredients])

  return (
    <div>
      <div className="cocktails">
        <div>
        <h2>Cocktails!</h2>
          <div className="allCocktails">
            {(cocktails === "None Found")
              ? <div>No Cocktails</div> :
              <div>
                <h3>Found {setMaxCocktails(cocktails.length)} cocktails:</h3>
                <div className="test">
                {cocktails.slice(0, setMaxCocktails(cocktails.length)).map((cocktail) => {
                  return (
                    <div className="renderedCocktail">
                      <div className="cocktail">{cocktail.strDrink}</div>
                      <img src={cocktail.strDrinkThumb} width="125px"/>
                    </div>
                  )
                })}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="ingredients">
        <h2>Ingredients!</h2>
        <form onSubmit={addIngredient}>
          <div className="buttons">
            <button className="ingredient-button" onClick={clearIngredients}>Clear Ingredients</button>
            <button className="ingredient-button" type="submit">Add Ingredient</button>
          </div>
          <input className="addIngredient" type="text" placeholder="add ingredients here!" name="ingredient"></input>
        </form>
        <div> {ingredients.map((ingredient) => { return (<h3 className="ingredient">{ingredient}</h3>) })} </div>
      </div>
    </div>
  )
};