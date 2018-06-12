$(document).ready(function() {
    $("#submission_register_host").on("click", function(event) {
        event.preventDefault();

        var newHost = {
            title: $("#register_type_of_asset").val().trim(),
            short_description: $("#short_descrption").val().trim(),
            available_time_start: $("#available_time_start").val(),
            available_time_end: $("#available_time_end").val(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip: $("#zip").val(),
            country: $("#country").val().trim()
        }
        console.log(newHost);

        $.post("/api/hostregister", newHost)
            .then(function (data) {
                console.log("meow");
            });
    });
});
