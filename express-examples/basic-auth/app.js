//Go to http://localhost:3000
//open console and declare the following function:
/*
function login(authType) {
    const auth = `Basic ${btoa(`Admin:secret1234`)}`;
    
    return fetch(`http://localhost:3000/${authType}`, {
      headers: new Headers({
        Authorization: auth
      })
    }).then(x => console.log("You're in!", x));
  
}
*/
//authType should be the name of one of the routes bellow

const express = require('express')

const app = express()
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const basicAuth = require('express-basic-auth')

//Requires basic auth with username 'Admin' and password 'secret1234'
const staticUserAuth = basicAuth({
    users: {
        'Admin': 'secret1234'
    },
    challenge: false
})

//Uses a custom (synchronous) authorizer function
const customAuthorizerAuth = basicAuth({
    authorizer: myAuthorizer
})

//Same, but sends a basic auth challenge header when authorization fails
const challengeAuth = basicAuth({
    authorizer: myAuthorizer,
    challenge: true
})

//Uses a custom asynchronous authorizer function
const asyncAuth = basicAuth({
    authorizer: myAsyncAuthorizer,
    authorizeAsync: true
})

//Uses a custom response body function
const customBodyAuth = basicAuth({
    users: {
        'Foo': 'bar'
    },
    unauthorizedResponse: getUnauthorizedResponse
})

//Uses a static response body
const staticBodyAuth = basicAuth({
    unauthorizedResponse: 'Haaaaaha'
})

//Uses a JSON response body
const jsonBodyAuth = basicAuth({
    unauthorizedResponse: {
        foo: 'bar'
    }
})

//Uses a custom realm
const realmAuth = basicAuth({
    challenge: true,
    realm: 'test'
})

//Uses a custom realm function
const realmFunctionAuth = basicAuth({
    challenge: true,
    realm: function (req) {
        return 'bla'
    }
})


app.get('/', function (req, res) {
    res.status(200).send("OK")
})

app.get('/static', staticUserAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/custom', customAuthorizerAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/challenge', challengeAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/async', asyncAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/custombody', customBodyAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/staticbody', staticBodyAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/jsonbody', jsonBodyAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/realm', realmAuth, function (req, res) {
    res.status(200).send('You passed')
})

app.get('/realmfunction', realmFunctionAuth, function (req, res) {
    res.status(200).send('You passed')
})

//Custom authorizer checking if the username starts with 'A' and the password with 'secret'
function myAuthorizer(username, password) {
    return username.startsWith('A') && password.startsWith('secret')
}

//Same but asynchronous
function myAsyncAuthorizer(username, password, cb) {
    if (username.startsWith('A') && password.startsWith('secret'))
        return cb(null, true)
    else
        return cb(null, false)
}

function getUnauthorizedResponse(req) {
    return req.auth ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected') : 'No credentials provided'
}

module.exports = app;