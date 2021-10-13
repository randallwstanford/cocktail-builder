import React, { useState, useEffect } from 'react';
const axios = require('axios');

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function IngredientsAndCocktails() {
  const [ingredients, setIngredients] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  const clearIngredients = () => {
    setIngredients([]);
    setCocktails([]);
  };

  var getCocktails = () => {
    var params = ingredients[0];
    if (ingredients.length > 0) params = ingredients.join(',');
    axios.get('/drinks', { params: {ingredient: params}})
    .then(response => {
      if (typeof response.data.drinks !== 'string') {
        console.log(response.data.drinks)
        setCocktails(shuffleArray(response.data.drinks))
      }
    })
    .catch(err => console.log(err));
  }

  const addIngredient = (event) => {
    event.preventDefault();
    var ingredient = event.target.ingredient.value;
    if (ingredient.length !== 0) {
      setIngredients([...ingredients, ingredient.charAt(0).toUpperCase() + ingredient.slice(1)])
      document.getElementsByClassName("addIngredient")[0].value = '';
    }
  }

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
              ? <div>No Cocktails</div>
              : <div>
                  {console.log(cocktails.length)}
                  <h3>Random {cocktails.length} cocktails:</h3>
                  {cocktails.slice(0, cocktails.length).map((cocktail) => { return ( <h3>{cocktail.strDrink}</h3>) } ) }
                </div>}
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
          <input type="text" placeholder="add ingredients here!" className="addIngredient" name="ingredient"></input>
        </form>
        <div> {ingredients.map((ingredient) => { return (<h3 className="ingredient">{ingredient}</h3>) })} </div>
      </div>
    </div>
  )
};