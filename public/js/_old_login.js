$(document).ready(function () {
  $("#hp-login").on("click", function (event) {
    event.preventDefault();

    var existingUser = {
      email: $("#email").val(),
      password: $("#password").val().trim()
    }
    console.log(existingUser);

    $.post("/api/login", existingUser)

  });

});

$(document).ready(function () {
  $("#login-page").on("click", function (event) {
    event.preventDefault();

    var existingUser = {
      email: $("#email").val(),
      password: $("#password").val().trim()
    }
    console.log(existingUser);

    $.post("/api/login", existingUser)

  });

});


