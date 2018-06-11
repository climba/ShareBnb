// var testApiController = require("../controllers/testApi");
var db = require("../models");
module.exports = function(app) {
  // app.get("/test", testApiController.index);

  app.post("/api/hostregister", function(req, res) {
    console.log("You are creating a new host!");
    db.Asset.create(req.body).then(function(dbAsset) {
      res.json(dbAsset);
    });
  });

};

