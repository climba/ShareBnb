$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var fnameInput = $("input#first-name");
  var lnameInput = $("input#last-name");
  var phoneInput = $("input#phone");
  var emailInput = $("input#email");
  var addressInput = $("input#address");
  var cityInput = $("input#city");
  var stateInput = $("input#state");
  var zipInput = $("input#zip");
  var passwordInput = $("input#password");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      first_name: fnameInput.val().trim(),
      last_name: lnameInput.val().trim(),
      phone_no: phoneInput.val().trim(),
      email: emailInput.val().trim(),
      address: addressInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zip: zipInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.first_name || !userData.last_name ||
      !userData.phone_no || !userData.email ||
      !userData.address || !userData.city ||
      !userData.state || !userData.zip ||
      !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.first_name, userData.last_name, userData.phone_no,
      userData.email, userData.address, userData.city,
      userData.state, userData.zip, userData.password);
    fnameInput.val("");
    lnameInput.val("");
    phoneInput.val("");
    emailInput.val("");
    addressInput.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first_name, last_name, phone_no, email, address, city, state, zip, password) {
    $.post("/api/signup", {
      first_name: first_name,
      last_name: last_name,
      phone_no: phone_no,
      email: email,
      address: address,
      city: city,
      state: state,
      zip: zip,
      password: password
    }).then(function (data) {
      // window.location.replace(data);
      window.location.href = '/login'
      console.log(data.first_name)
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
