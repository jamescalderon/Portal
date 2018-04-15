/**
 * Email page logic
 */

$(document).ready(function() {
    var emails = []; //holds email objects
    var tasks = []; //holds alert objects

    //get data file and load arrays
    $.getJSON("./data/emails.json", function(result) {
        var rowCounter = 0;
        var maxInRow = 3;
        $.each(result, function(i, field) {
            //for each part of the data, determine how to handle it
            console.log("i: ", i, "field: ", field);

            if (i < (rowCounter + maxInRow)) {
                // field.forEach(element => {
                //     emails.push(element);
                // });
                makeCard(field.email, field.message, field.read, field.sender, field.subject, field.time, field.time, false, rowCounter);
            } else {
                rowCounter++; //next row
                makeCard(field.email, field.message, field.read, field.sender, field.subject, field.time, field.time, true, rowCounter);
            }



            // if (i === 'Alerts') {
            //     field.forEach(element => {
            //         tasks.push(element);
            //     });
            // }
        }); //end jQuery each
    }); //end json load


    function makeCard(email, message, read, sender, subject, time, urgent, newDeck, deckNum) {
        //outer card container div
        var card = $("<div>").addClass("card mb-4 box-shadow").attr("style", "width: 18rem;");
        //card body div
        var cardBody = $('<div>').addClass("card-body");
        //card title
        $('<h5>').addClass("card-title").text(toTitleCase(subject)).appendTo(cardBody);
        //card subtitle
        $('<h6>').addClass("card-subtitle mb-2 text-muted").text("From: " + email).appendTo(cardBody);
        //card text
        $('<p>').addClass("card-text").text(message).appendTo(cardBody);


        var cardDeck = $("<div>").addClass("card-deck mb-3 text-center deck" + deckNum.toString());
        cardBody.appendTo(card); //add card to card body
        card.appendTo(cardDeck);
        cardDeck.appendTo(".container");

    }

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }
}); //end document load