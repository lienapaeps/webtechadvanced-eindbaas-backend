const express = require('express');
// const logger = require('./middleware/logger');
const app = express();
const port = 3002;
const apiV1Transfersrouter = require('../routes/api/v1/transfers');
const apiV1Usersrouter = require('../routes/api/v1/users');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('api/v1/transfers', apiV1Transfersrouter);
app.use('api/v1/users', apiV1Usersrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});