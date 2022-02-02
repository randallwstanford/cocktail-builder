import React from 'react';
import { setMaxCocktails } from './utils';

export default function Cocktails({ cocktails }) {
  const saveDrink = (event) => {
    const drinkName = event.target.parentNode.childNodes[0].innerText;
    const drinkUrl = event.target.parentNode.childNodes[1].getAttribute('src');
    localStorage.setItem(drinkName, drinkUrl);
  };

  return (
    <div className="cocktailsContainer">
      <h2>Cocktails:</h2>
      <div className="allCocktails">
        {(cocktails === 'None Found')
          ? <div>No Cocktails</div>
          : (
            <div>
              <h3>Found {setMaxCocktails(cocktails.length)} cocktails:</h3>
              <div className="cocktail-wrap">
                {cocktails.slice(0, setMaxCocktails(cocktails.length)).map((cocktail) => (
                  <button type="button" className="renderedCocktail" onClick={saveDrink}>
                    <div className="cocktail">{cocktail.strDrink}</div>
                    <img alt="" src={cocktail.strDrinkThumb} width="100px" />
                  </button>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
