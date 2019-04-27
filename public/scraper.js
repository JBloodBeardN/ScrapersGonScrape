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
});