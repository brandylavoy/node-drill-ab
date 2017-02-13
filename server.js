'use strict';

// require express
const express = require('express');
// require cookie-parser
const cookieParser = require('cookie-parser');

const app = express();

// use cookie parser
app.use(cookieParser());

// get request for the request/response loop
app.get('/', function(req, res){
    console.log('Cookie: ', req.cookies)
})

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));