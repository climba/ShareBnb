$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and author select
  var fnameInput = $("#first-name");
  var lnameInput = $("#last-name");
  var phoneInput = $("#phone");
  var emailInput = $("#email");
  var addressInput = $("#address");
  var cityInput = $("#city");
  var stateInput = $("#state");
  var passwordInput = $("#password");
  var userForm = $("#user-signup");
  // Adding an event listener for when the form is submitted
  $(userForm).on("submit", handleFormSubmit);

  // Getting the Users
  getUser();

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!fnameInput.val().trim() ||
      !lnameInput.val().trim() ||
      !phoneInput.val().trim() ||
      !emailInput.val().trim() ||
      !addressInput.val().trim() ||
      !cityInput.val().trim() ||
      !stateInput.val().trim() ||
      !passwordInput.val()) {
      return;
    }
    // Constructing a newUser object to hand to the database
    var newUser = {
      first_name: fnameInput
        .val()
        .trim(),
      last_name: lnameInput
        .val()
        .trim(),
        email: emailInput
        .val()
        .trim(),
        address: addressInput
        .val()
        .trim(),
        city: cityInput
        .val()
        .trim(),
        state: stateInput
        .val()
        .trim(),
        password: passwordInput
        .val()
        .trim()

    };

    // If we're updating a User run updateUser to update a User
    // Otherwise run submitUser to create a whole new User
    if (updating) {
      // newUser.id = UserId;
      updateUser(newUser);
    }
    else {
      submitUser(newUser);
    }
  }

  // Submits a new user and brings user to new user page upon completion
  function submitUser(post) {
    $.post("/api/user", post, function () {
      window.location.href = "/new-user";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
  function getUserData(id, type) {
    var queryUrl;
    switch (type) {
      case "signup":
        queryUrl = "/api/signup/" + id;
        break;
      case "login":
        queryUrl = "/api/login/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function (data) {
      if (data) {
        // If this user exists, prefill our user form with its data
        fnameInput.val(data.first_name);
        lnameInput.val(data.last_name);
        phoneInput.val(data.phone);
        emailInput.val(data.email);
        addressInput.val(data.address);
        cityInput.val(data.city);
        stateInput.val(data.state);
        passwordInput.val(data.password);
      }
    });
  }


  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  // function renderAuthorList(data) {

  //   $(".hidden").removeClass("hidden");
  //   var rowsToAdd = [];
  //   for (var i = 0; i < data.length; i++) {
  //     rowsToAdd.push(createAuthorRow(data[i]));
  //   }
  //   authorSelect.empty();
  //   console.log(rowsToAdd);
  //   console.log(authorSelect);
  //   authorSelect.append(rowsToAdd);
  //   authorSelect.val(authorId);
  // }

  // Creates the category options in the dropdown
  // function createCategoryRow(author) {
  //   var listOption = $("<option>");
  //   listOption.attr("value", author.id);
  //   listOption.text(author.name);
  //   return listOption;
  // }

  // Update a user, bring user to the new-user page when done
  function updateUser(post) {
    $.ajax({
      method: "PUT",
      url: "/api/users",
      data: user
    })
      .then(function () {
        window.location.href = "/newuser";
      });
  }
});
