var db = require("../models");

module.exports = function(app) {

  app.post("/api/signup", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/hostregister", function(req, res) {
    console.log("You are creating a new host!");
    db.Asset.create(req.body).then(function(dbAsset) {
      res.json(dbAsset);
    });
  });



};
