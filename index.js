const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/thundercats.route');

app.use(cors());
app.use(express.json());

app.use('/thundercats', route);

/*
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/thundercats/find-cats', (req, res) => {
  res.send(thundercats);
});

app.get('/thundercats/find-cats/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenCats = thundercats.find((cats) => thundercats.id == idParam);
  res.send(chosenCats);
});
*/
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
