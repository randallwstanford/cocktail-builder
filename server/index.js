const axios = require('axios');
const path = require('path');
const routes = require('./routes.js');
const express = require('express');
const app = express();
const port = 3001;
const url = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i='

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')))

app.get('/drinks', (req, res) => {
  axios.get(url + req.query.ingredient)
    .then(response => res.send(response.data))
    .catch(error => console.log(error))
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})
