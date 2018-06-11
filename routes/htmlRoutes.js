module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome to sharebnb, your local sharing site!"
    });
  })
  app.get("/login", function(req, res) {
    res.render("login", {
      msg: "Welcome to sharebnb, your local sharing site!"
    });
  })
  

  app.get("/hostregister", function(req, res) {
    res.render("hostregister", {
    });
  })
};


