$(document).ready(function () {
    $("#find_space").on("click", function (event) {
        event.preventDefault();
        var city = $("#city_finder").val();
        // var title = $("#title_finder").val();

        console.log("City is: ", city);
        // console.log("Tyype is: ", title);

        // This function grabs Assets from the database and updates the view
        var resultsContainer = $(".append_results");

        function getAssets() {
            $.get("/api/assets/" + city, function (data) {
                console.log("Listings: ", data);

                for (var i = 0; i < data.length; i++) {
                    // $(resultsContainer).append($("<div>").addClass("card-header mt-2").text("Result #" + parseInt(parseInt([i]) + parseInt(1))))

                    var newPostCard = $("<div>");
                    newPostCard.addClass("card mt-2");

                    var newPostCardHeading = $("<div>");
                    newPostCardHeading.addClass("card-header mt-2");

                    var newPostTitle = $("<h2>");
                    var newPostCategory = $("<div>");

                    newPostCategory.html("<img class='rounded' height='200px' src='" + data[i].image_url_1 + "' />");
                    
                    newPostCategory.css({
                        float: "right",
                        "font-weight": "700",
                        "margin-top": "10px",
                        "margin-right": "10px",
                        "martin-bottom": "10px"
                        
                    });
                    var newPostCardBody = $("<div>");
                    newPostCardBody.addClass("card-body");
                    var newPostBody = $("<p>");
                    newPostBody.addClass("col-sm-6");
                    newPostTitle.text(data[i].title + " in " + data[i].city);
                    newPostBody.html("<h3>Description: </h3>" + data[i].short_description + 
                                    "<br><br><h3>Price Per Day:</h3> $" + data[i].register_price_daily);

                    var newButtonThing = $("<div>");
                    newButtonThing.text("Book");
                    
                    newButtonThing.addClass("col-sm-3 mb-3 mr-3 ml-3 btn btn-success wow");

                    newPostCardHeading.append(newPostTitle);
                    newPostCardBody.append(newPostCategory);
                    newPostCardBody.append(newPostBody);
                    newPostCard.append(newPostCardHeading);
                    newPostCard.append(newPostCardBody);
                    newPostCard.append(newButtonThing);
                    $(resultsContainer).append(newPostCard);
                    // newPostCard.data("post", post);
                    // return newPostCard;
                }

            });

        };

        getAssets();

    });
});