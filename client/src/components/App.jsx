import React from 'react';
import Input from '../components/Input.jsx';

export default function App() {
  return (
    <div className="container">
      <h1>What cocktails can I make with my current ingredients?</h1>
      <h2>Try: Sugar, Orange, Lime, Vodka, Gin, Pineapple Juice, Cherry, Olive</h2>
      <h2>Angostura bitters, Coca-Cola, Lemon Peel, Dry Vermouth, Ice, and more...</h2>
      <IngredientsAndCocktails />
    </div>
  )
};

