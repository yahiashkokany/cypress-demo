const express = require('express');
const path = require('path');

const app = express();
const root = __dirname;

app.use(express.static(root));

app.get('/api/products', (_req, res) => {
  res.json([
    { id: 1, name: 'Default Product', price: 10 },
  ]);
});

app.listen(3000, () => {
  console.log('Demo app running at http://localhost:3000');
});
