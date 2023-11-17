$(document).ready(function (){

    $("#main").on("click", ".ticket", function(e) {
        // database call here to get ticket details
        getTicketDetails(this);
        e.stopPropagation();
    });

    function getTicketDetails(ticket) {



        $(".focused").removeClass("hidden");
    }

    $("#main").click(function() {
        if(!$(".focused").hasClass("hidden")) {
            $(".focused").addClass("hidden");
        }
    });


    $(".focused").click(function(e) {
        e.stopPropagation();
    })




    function connectToSheets() {
        let url = "https://script.google.com/macros/s/AKfycbzO-p-_SNXoBCchyieTxBCQnTH-5JgIxO6Ix9hZ-vIIkQKOrwIoHM-zQzRCLUaqMmaeNg/exec";
        document.getElementById('form').action = url;

        jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp",
            success: function(data) {loadData(data) }

            });
            
             // log the returned data
              function loadData(e) {
              console.log(e);
              }
    }

    connectToSheets();
});

