# Cocktail Builder 🍸🍹

![Screen Shot 2022-02-02 at 4 04 17 PM](https://user-images.githubusercontent.com/83252804/152252511-225f13a4-de3d-4d43-8dcb-6ca5b263cd0c.png)

## About

Cocktail Builder is a single page web app designed to show you a list of cocktails you can build with the engredients you have on hand.
This web app uses the [CocktailDB](https://www.thecocktaildb.com/) API.

Simply put in your ingredients in the input field and the page will start showing you results. The more ingredients, the more filtered your search is. 

## Technologies
  - React
  - Express.js
  - CocktailDB
  - ESLint

## Setup
  - Acquire an API key from the [CocktailDB](https://www.thecocktaildb.com/) API. ($2/m). 
  - Rename apiKey.example.js to apiKey.js and replace the string with you new API key. `const token = 'xxxxxxx';`
  - Run the following: 
  ``` 
  $ cd ./cocktail-builer
  $ npm install
  $ npm run server
  ```
  - Open new terminal window then run: 
  ```
  $ cd ./cocktail-builer 
  $ npm run build
  ```
