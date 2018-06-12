  // app.get("/test", testApiController.index);

var db = require("../models");

module.exports = function(app) {

  app.post("/api/signup", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      console.log("New User added!", dbUser)
      res.json(dbUser);
    });
  });

  app.put("/api/hostregister", function (req, res) {
    console.log("hostregistery form data ===> ", req.body)

    db.Asset.update(req.body, {returning: true, where: {userId: } })
     .then(function(data) {
       console.log("Update return ===> ", data)
      // res.json(row sUpdated)
    });
   });

  // app.post("/api/hostregister", function(req, res) {
  //   console.log("You are updating an existing host!");
  //   console.log("hostregistery ===> ", req.body)

  //   db.Asset.update(req.body).then(function(dbAsset) {
  //     res.json(dbAsset);
  //   });
  // });

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
        console.log("User Object ====> ", dbUser)
        if (password === existingUser.password) {
          console.log("YES");
        }
        res.json(dbUser);
      });
    });

    app.post("/uploads", function (req, res) {
      db.User.findOne(
        where: {user_id: 

      ).then(function(userObj)
        console.log(userObj)

        var userId = userObj.id
      )

      var newHost = {
        userId: userId,
        image_url_1: req.files['assetImages[0]'].path
      }

      db.Asset.create(newHost).then(function(data) {
        console.log("When image is uploaded ===> ", data)
        console.log("New submit ID ===> ", data.dataValues.id)

        res.json(data);
      });
    })
};
