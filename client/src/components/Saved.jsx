import React from 'react';

export default function Saved() {

  var savedDrinks = [];

  for (var key in localStorage) {
    savedDrinks.push({name: key, url: localStorage[key]})
  }

  const removeDrink = (event) => {
    var drinkName = event.target.parentNode.childNodes[0].innerText;
    localStorage.removeItem(drinkName);
  }

  return (
    <div>
      <h3>Saved Cocktails:</h3>
      <div>
      {savedDrinks.slice(0, savedDrinks.length - 6).map(drink => {
        return (
          <div className="saved-drinks" onClick={removeDrink}>
            <div className="cocktail">{drink.name}</div>
            <img src={drink.url} width="125px"/>
          </div>
        )
      })}
      </div>
    </div>
  )
};