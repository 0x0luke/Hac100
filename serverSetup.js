var express = require("express")

app = express();

port = process.env.PORT || 1234;
app.listen(port);

console.log("RESTful API started on port " + port);

