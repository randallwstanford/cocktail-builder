import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { shuffleArray, checkForNaughtyWords } from './utils';

// Components
import Cocktails from './Cocktails.jsx';
import Saved from './Saved.jsx';
import Ingredients from './Ingredients.jsx';
import Header from './Header.jsx';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = () => {
    let parameters = ingredients[0];

    if (ingredients.length > 0) parameters = ingredients.join(',');

    axios.get('/drinks', { params: { ingredient: parameters } })
      .then(({ data }) => {
        if (typeof data.drinks !== 'string') {
          setCocktails(shuffleArray(checkForNaughtyWords(data.drinks)));
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCocktails();
  }, [ingredients]);

  return (
    <div className="container">
      <Header />
      <div className="toJustify">
        <Cocktails cocktails={cocktails} />
        <Ingredients
          ingredients={ingredients}
          setIngredients={setIngredients}
          setCocktails={setCocktails}
        />
        <Saved />
      </div>
    </div>
  );
}
