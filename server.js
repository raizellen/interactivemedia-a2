const fs = require('fs'); // import the file system module to read and write files
const path = require('path'); // import node's path module to work with file and directory paths
const express = require('express'); // import the express framework to create a web server
const app = express(); // create server instance

app.use(express.json()); // middleware to parse incoming JSON requests
app.use(express.static(__dirname)); // serve static files from the current directory

const file = path.join(__dirname, 'assets', 'data.json');

app.get('/answers', (req, res) => {
  res.json(JSON.parse(fs.readFileSync(file, 'utf8'))); // read the data from the file and send it as a JSON response
});

app.post('/answers', (req, res) => {
  fs.writeFileSync(file, JSON.stringify(req.body, null, 2)); // convert to text and overwrite the file with the new data
  res.sendStatus(200); // HTTP status code 200 OK
});

app.listen(3000, () => console.log('http://localhost:3000')); // start the server and listen on port 3000