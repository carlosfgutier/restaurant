// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Routes
//HTML
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/survey.html"));
// });

// //API
// app.get("/api/friends", function() {
//   var chosen = req.params.friends;

//   if (chosen) {
//     console.log(chosen);

//       for (var i = 0; i < character.length; i++) {
//         if (chosen === friends[i].routeName) {
//           return res.json(friends[i]);
//         }
//       }

//       return res.json(false);
//   }
//   return res.json(friends);
// });

// app.post("/api/new", function(req, res) {
//   var newFriend = req.body;
//   newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
//   console.log(newFriend);

//   friends.push(newFriend);

//   res.json(newFriend);
// })

