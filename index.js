const express = require('express');
const port = 3001;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
