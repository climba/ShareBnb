$(document).ready(function () {
    $("#user-signup").on("click", function (event) {
        event.preventDefault();

        var newUser = {
            first_name: $("#first-name").val().trim(),
            last_name: $("#last-name").val().trim(),
            phone_no: $("#phone").val(),
            email: $("#email").val(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip: $("#zip").val(),
            password: $("#password").val().trim()
        }
        // console.log(newUser);

        $.post("/api/signup", newUser)
            .then(function (data) {
            })
    });
});
