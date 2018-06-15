
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index", {
      msg: "Welcome to sharebnb, your local sharing site!"
    });
  })

  app.get("/members", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("members");
  });

  app.get("/signup", function (req, res) {
    res.render("signup", {
      msg: "Welcome to sharebnb, signup here!"
    });
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
      res.render("login", {
        msg: "Welcome to sharebnb, login here!"
      }
    );
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.redirect("/members");
  });

  app.get("/hostregister", function (req, res) {
    res.render("hostregister", {
    });
  });

  app.get("/search", function (req, res) {
    res.render("search", {
    });
  });

  app.get("/results", function (req, res) {
    res.render("results", {
    });
  });
};





