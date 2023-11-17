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

    function createTicket(row) {
        let main = $("#main");

        let ticket = `<div class="ticket">
                        <table>
                            <tbody>
                                    <tr><td class="heading">task:</td><td>${row[0]}</td></tr>
                                    <tr><td class="heading">description:</td><td>${row[1]}</td></tr>
                                    <tr><td class="heading">input:</td><td>${row[2]}</td></tr>
                                    <tr><td class="heading">output:</td><td>${row[3]}</td></tr>
                                
                            </tbody>
                        </table>
                    </div>`;
        main.append(ticket);
    }
    function displayDataAsTickets(data) {
        for (var i = 1; i < data.length; i++) {
            createTicket(data[i]);
        }
    }
    



    function connectToSheets() {
        let url = "https://script.google.com/macros/s/AKfycbySPnxqQ4bT4Vjzxzp_it78SZ17I35PV_nZLtSVpF-0ZJuZcnthLFcVI4RL-ddvCPWlzw/exec";
        document.getElementById('form').action = url;

        jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "json",
            success: function(resp) {
                console.log(resp);
                displayDataAsTickets(resp.data)
            }
            });
    }

    connectToSheets();
});

