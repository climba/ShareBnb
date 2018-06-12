// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(user) {
      // res.redirect(307, "/api/signup");
      res.json(user)
      // res.render('/members')
    }).catch(function(err) {
      console.log(err);

      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/hostregister", function(req, res) {
    console.log("You are creating a new host!");
    db.Asset.create(req.body).then(function(dbAsset) {
      res.json(dbAsset);
    });
  });

};


// var db = require("../models");

// module.exports = function(app) {

//   app.post("/api/signup", function(req, res) {
//     db.User.create(req.body).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });



//   // app.get("/api/login", function(req, res) {
//   //   console.log("You are loging in!");
//   //   db.User.get(req.body).then(function(dbUser) {
//   //     res.json(dbUser);
//   //   });
//   // });

//     // GET route for getting all of the posts
//     app.post("/api/login", function (req, res) {
//       // var query = {};
//       // if (req.query.email) {
//       //   query.email = req.query.email;
//       // }
//       console.log(req.body);
//       // Here we add an "include" property to our options in our findAll query
//       db.User.findAll({
//         where: {email: req.body.email}
//       }).then(function (dbUser) {
//         console.log(dbUser.dataValues)
//         console.log(req.body.password)
//         // if (dbUser.password === req.body.password) {
//         //   console.log("YES");
//         // }
//         res.json(dbUser);
//       });
//     });
// };

