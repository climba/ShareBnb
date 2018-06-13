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
            });
        };

        // This function grabs Assets from the database and updates the view
        var resultsContainer = $(".append_results");
        var assets;

        function getAssets() {
            $.get("/api/assets/" + city, function (data) {
                console.log("Listings: ", data);
                assets = data;
                // if (!assets || !assets.length) {
                //     displayEmpty();
                // }
                // else {
                    initializeRows();
                // }
            });
        };

        function displayEmpty() {
            resultsContainer.empty();
        };

        getAssets();

        // InitializeRows handles appending all of our constructed Assets HTML inside
        // resultsContainer
        function initializeRows() {
            
            resultsContainer.empty();
            var assetsToAdd = [];
            for (var i = 0; i < assets.length; i++) {
                assetsToAdd.push(createNewRow(assets[i]));
            }
            resultsContainer.append(assetsToAdd);
        };

        // This function constructs a Asset's HTML
        function createNewRow(assets) {
            console.log("construct a row"),
            $("<p>").text("test")

            // var newAssetCard = $("<div>");
            // newAssetCard.addClass("card");
            // var newAssetCardHeading = $("<div>");
            // newAssetCardHeading.addClass("card-header");
            // var newAssetTitle = $("<h2>");
            // var newAssetShrtDiv = $("<div>");
            // var newAssetCardShrtDesc = $("<div>");
            // newAssetCardShrtDesc.addClass("card-body");
            // var newAssetShrtDesc = $("<p>");
            // newAssetTitle.text(assets.title + " ");
            // newAssetShrtDesc.text(assets.short_description);
            // newAssetCardHeading.append(newAssetShrtDiv);
            // newAssetShrtDesc.append(newAssetCardHeading);
            // newAssetCard.data("Asset", assets);
            // return newAssetCard;
        }

    });
});