$(document).ready(function () {
    $("#find_space").on("click", function (event) {
        event.preventDefault();
        var city = $("#city_finder").val();

        console.log("City is: ", city);

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
                    newPostCardHeading.addClass("card-header");

                    var newPostTitle = $("<h2>");
                    var newPostCategory = $("<div>");

                    newPostCategory.html("<img height='200px' src='" + data[i].image_url_1 + "' />");
                    newPostCategory.css({
                        float: "right",
                        "font-weight": "700",
                        "margin-top": "5px"
                    });
                    var newPostCardBody = $("<div>");
                    newPostCardBody.addClass("card-body");
                    var newPostBody = $("<p>");
                    newPostTitle.text(data[i].title + " in " + data[i].city);
                    newPostBody.html("<strong>Description: \n</strong>" + data[i].short_description);

                    newPostCardHeading.append(newPostTitle);
                    newPostCardBody.append(newPostCategory);
                    newPostCardBody.append(newPostBody);
                    newPostCard.append(newPostCardHeading);
                    newPostCard.append(newPostCardBody);
                    $(resultsContainer).append(newPostCard);
                    // newPostCard.data("post", post);
                    // return newPostCard;
                }

            });

        };

        getAssets();

    });
});