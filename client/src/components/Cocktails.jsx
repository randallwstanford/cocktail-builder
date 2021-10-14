import React from 'react';
import { setMaxCocktails } from './utils.js';

export default function Cocktails({cocktails}) {

  const saveDrink = (event) => {
    var drinkName = event.target.parentNode.childNodes[0].innerText;
    var drinkUrl = event.target.parentNode.childNodes[1].getAttribute('src');
    localStorage.setItem(drinkName, drinkUrl)
  }

  return (
    <div className="cocktails">
    <div>
    <h2>Cocktails!</h2>
      <div className="allCocktails">
        {(cocktails === "None Found")
          ? <div>No Cocktails</div> :
          <div>
            <h3>Found {setMaxCocktails(cocktails.length)} cocktails:</h3>
            <div className="cocktail-wrap">
            {cocktails.slice(0, setMaxCocktails(cocktails.length)).map((cocktail) => {
              return (
                <div className="renderedCocktail" onClick={saveDrink}>
                  <div className="cocktail">{cocktail.strDrink}</div>
                  <img src={cocktail.strDrinkThumb} width="125px"/>
                </div>
              )})}
            </div>
          </div>}
      </div>
    </div>
  </div>
  )
};