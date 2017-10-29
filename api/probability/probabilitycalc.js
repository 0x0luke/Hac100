'use strict';

var probability = require('probability');
const https = require('https');

var responses = request('http://127.0.0.1:3000/items', {json: true},(err,res,body) => {
if (err) { return console.log(err); }
});

