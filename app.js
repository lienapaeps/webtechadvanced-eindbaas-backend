// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// const apiTransfersRouter = require("./routes/api/v1/transfers");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/coinapp');

// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use("/api/v1/transfers", apiTransfersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const express = require('express');
const mongoose = require('mongoose');
const transferRouter = require("./routes/api/v1/transfers");

mongoose.connect('mongodb://localhost:27017/coinapp');
const app = express();
const port = 3000;
app.set('view engine', 'pug');

app.use(express.json()); //module om json te parsen
//middelware runnen voor hele hoop routes
app.use("/api/v1/transfers", transferRouter);

//REST
// app.get('/', (req, res) => {
//   res.render("index", {title: "cool", message: "wauw seeeeg!😍"});
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
