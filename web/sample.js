const express = require('express');
const app = express();
const port = 3000;

app.use(function(req, res, next){
    console.log('Hello World in console. I am changing it for testing pr');
    next();
});

app.get('/', (req, res) => {
    console.log('again');
  res.send('Hello World!Yo2');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// some updates to my sample.js file only to send them to github!
