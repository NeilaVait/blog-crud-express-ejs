const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

// 404 case - kai vartotojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('Ooops page not found'));

app.listen(PORT);
