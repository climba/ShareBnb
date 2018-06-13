$(document).ready(function () {
    $("#find_space").on("click", function (event) {
        event.preventDefault();


        var city = $("#city_finder").val();
        
        console.log("City is: ", city);
        if (city) {
            $.get("/api/assets/" + city).then(function (results) {
                console.log(results);

                for (var i = 0; i < results.length; i++) {
                    console.log(results[i].city, results[i].title, results[i].id, results[i].short_description);
                }

                

            })

        }



    });
});