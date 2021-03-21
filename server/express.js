const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.get('/', async (req, res) => {
  let appDiv = document.getElementById('app');

});

app.listen(PORT, () => {
  console.log('express listening on port ' + PORT)
});
