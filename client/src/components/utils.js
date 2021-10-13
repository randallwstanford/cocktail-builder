exports.shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

exports.checkForNaughtyWords = (cocktails) => {
  console.log('checing for naughty words in utils')
  if (cocktails.length > 0) {
    return cocktails.filter(cocktail => {
      if (
        cocktail.strDrink === 'Pornstar Martini' ||
        cocktail.strDrink === '69 Special' ||
        cocktail.strDrink === 'Screaming Orgasm') {
        return;
      } else { return cocktail; }
    })
  }
}

exports.setMaxCocktails = (lengthToTest) => {
  if (lengthToTest > 20) { return 20; }
  return lengthToTest
};