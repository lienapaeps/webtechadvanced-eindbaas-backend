const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
// const config = require('config');
const passport = require('./passport/passport');
const transferRouter = require("./routes/api/v1/transfers");
const userRouter = require("./routes/api/v1/users");

mongoose.connect('mongodb://localhost:27017/coinapp');
const app = express();
const port = 3002;
app.set('view engine', 'pug');

app.use(express.json()); //module om json te parsen
app.use(cors());
//middelware runnen voor hele hoop routes
app.use("/api/v1/transfers", passport.authenticate('jwt', { session: false }), transferRouter);
app.use("/api/v1/users", passport.authenticate('jwt', { session: false }), userRouter);
app.use("/api/v1/auth", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
