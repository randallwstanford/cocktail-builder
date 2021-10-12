const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')))

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})
