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
        let url = "https://script.google.com/macros/s/AKfycbxIsI_RDpY3bcxi4n_Ti6gJKvn4BqSDcIk3n3W0bhJWVoPmyvqr8AzAxlkzrfu3zea3Mw/exec";
        document.getElementById('form').action = url;

        fetch(`${url}`)
            .then((response) => response.json())
            .then(({ data }) => {
                console.log(data);
                datalist = data;
            })
            .catch((error) => console.log('!!!!!!!!', error));
    }

    connectToSheets();
});

