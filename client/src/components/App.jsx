import React from 'react';
import Ingredients from '../components/Ingredients.jsx';

export default function App() {
  return (
    <div className="container">
      <div className="title">What cocktails can I make with my current ingredients?</div>
      <h2>Try: Sugar, Orange, Lime, Vodka, Gin, Pineapple Juice, Cherry, Olive</h2>
      <h2>Angostura bitters, Coca-Cola, Lemon Peel, Dry Vermouth, Ice, and more...</h2>
      <Ingredients />
    </div>
  )
};

