var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app level middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//router level middleware
app.use('/users', [(req, res, next) => {
    console.log('users router first mw')
    req.changedTheRequest = Date.now();
    next();
}, (req, res, next) => {
    console.log('users router 2ed mw', req.changedTheRequest)
    next();
}], usersRouter);

// endpoint level middleware
app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
}, function (req, res, next) {
    // send a regular response
    res.send('regular')
})




module.exports = app;