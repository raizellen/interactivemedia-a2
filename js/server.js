const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.'));

const file = 'assets/data.json';

app.get('/answers', (req, res) => {
  res.json(JSON.parse(fs.readFileSync(file, 'utf8')));
});

app.post('/answers', (req, res) => {
  fs.writeFileSync(file, JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(3000, () => console.log('http://localhost:3000'));