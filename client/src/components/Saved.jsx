/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';

export default function Saved() {
  const savedDrinks = [];

  for (const key in localStorage) {
    savedDrinks.push({ name: key, url: localStorage[key] });
  }

  const removeDrink = (event) => {
    const drinkName = event.target.parentNode.childNodes[0].innerText;
    localStorage.removeItem(drinkName);
  };

  return (
    <div className="savedContainer">
      <h3>Saved Cocktails:</h3>
      {savedDrinks.slice(0, savedDrinks.length - 6).map((drink) => (
        <button type="button" className="saved-drinks" onClick={removeDrink}>
          <div className="cocktail">{drink.name}</div>
          <img alt="" src={drink.url} width="125px" />
        </button>
      ))}
    </div>
  );
}
