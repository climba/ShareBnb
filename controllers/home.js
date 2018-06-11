module.exports = {
  renderHome: function(req, res) {
    res.render("index", {
      msg: "Welcome to sharebnb, your local sharing site!"
    });
  }
};
