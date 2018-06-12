
// var testApiController = require("../controllers/testApi");
var db = require("../models");
module.exports = function(app) {
  // app.get("/test", testApiController.index);

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

  // app.get("/api/login", function(req, res) {
  //   console.log("You are loging in!");
  //   db.User.get(req.body).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

    // GET route for getting all of the posts
    app.post("/api/login", function (req, res) {
      var query = {};
      if (req.query.email) {
        query.email = req.query.email;
      }
      console.log(req.body);
      // Here we add an "include" property to our options in our findAll query
      db.User.findAll({
        where: {email: req.body.email},
        include: [db.User]
      }).then(function (dbUser) {
        if (password === existingUser.password) {
          console.log("YES");
        }
        res.json(dbUser);
      });
    });

};
};
