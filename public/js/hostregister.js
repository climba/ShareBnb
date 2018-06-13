$(document).ready(function() {
    $("#submission_register_host").on("click", function(event) {
        event.preventDefault();
        
        // jQuery.each( [ "put", "delete" ], function( i, method ) {
        //     jQuery[ method ] = function( url, data, callback, type ) {
        //       if ( jQuery.isFunction( data ) ) {
        //         type = type || callback;
        //         callback = data;
        //         data = undefined;
        //       }
          
        //       return jQuery.ajax({
        //         url: url,
        //         type: method,
        //         dataType: type,
        //         data: data,
        //         success: callback
        //       });
        //     };
        //   });

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

        $.put("/api/hostregister", newHost)
            .then(function(data) {
                console.log("Form Submission data ====> ", data);
            });
    });
});