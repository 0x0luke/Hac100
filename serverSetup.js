var express = require("express")

app = express();

port = process.env.port(1234);
app.listen(port);

console.log("RESTful API started on port" + port);

