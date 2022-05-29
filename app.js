const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const config = require('./config/default.json');
=======
// const config = require('config');
>>>>>>> 829ec29e2d47534c5c6797d7b658ad6015344323
const passport = require('./passport/passport');
const transferRouter = require("./routes/api/v1/transfers");
const userRouter = require("./routes/api/v1/users");

mongoose.connect('mongodb+srv://ricky01:7t7qK0QFB7wgnBB9@cluster0.mrm22.mongodb.net/?retryWrites=true&w=majority');
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
