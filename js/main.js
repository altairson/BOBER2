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

