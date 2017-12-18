var tables = [];
var waitlist = [];

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Routes
// HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "restaurant.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

//API
app.get("/api/tables", function(req, res) {
	console.log("app.get: " + res);
  return res.json(tables);
});

//API
app.get("/api/waitlist", function(req, res) {
  console.log("app.get: " + res);
  return res.json(waitlist);
});

app.post("/api/tables", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  // if tables array has 5 in it
  if (tables.length <= 4) {
    tables.push(newReservation);
  } else {
    waitlist.push(newReservation);
  }
  
  res.json(newReservation);
});
