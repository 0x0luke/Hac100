var express = require('express'),
morgan = require('morgan'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Items = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

//var chance = require('./api/chance/chance');

console.log('RESTful API server started on port: ' + port + '/tcp');
