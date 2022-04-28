const express = require('express');
// const logger = require('./middleware/logger');
const app = express();
const port = 3000;
const apiV1Transfersrouter = require('./routers/api/v1/transfers');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('api/v1/transfers', apiV1Transfersrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});