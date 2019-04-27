//desktop targets
//scrape button
$(document).ready(function () {


    $("#scrape").on("click", function () {

        $.ajax({
            method: "GET",
            url: "/scrape"
        })
            // With that done, add the note information to the page
            .then(function (data) {
                window.location.replace("/");
            });

        //add comment button

        //modal targets
        //delete comment button

        //add comment button(form submit)
        //e.preventdefault() 
    });

    $(document).on("click", "#savenote", function () {
        // Grab the id associated with the article from the submit button
        var thisId = $(this).attr("data-id");

        // Run a POST request to change the note, using what's entered in the inputs
        $.ajax({
            method: "POST",
            url: "/articles/" + thisId,
            data: {
                // Value taken from title input
                title: $("#titleinput").val(),
                // Value taken from note textarea
                body: $("#bodyinput").val()
            }
        })
            // With that done
            .then(function (data) {
                console.log("data");
                console.log(data)
            }).then(function(){
                window.location.replace("/");
            });


    });
});