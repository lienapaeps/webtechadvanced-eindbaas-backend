const express = require('express');
const mongoose = require('mongoose');
const transferRouter = require("./routes/api/v1/transfers");
const userRouter = require("./routes/api/v1/users");

mongoose.connect('mongodb://localhost:27017/coinapp');
const app = express();
const port = 3000;
app.set('view engine', 'pug');

app.use(express.json()); //module om json te parsen
//middelware runnen voor hele hoop routes
app.use("/api/v1/transfers", transferRouter);
app.use("/api/v1/users", userRouter);

//REST
// app.get('/', (req, res) => {
//   res.render("index", {title: "cool", message: "wauw seeeeg!😍"});
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
