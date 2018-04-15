$(document).ready(function() {
    //declarations
    var emails = []; //holds email objects
    var alerts = []; //holds alert objects

    //get data file and load arrays
    $.getJSON("data.json", function(result) {
        $.each(result, function(i, field) {
            //for each part of the data, determine how to handle it

            if (i === 'Emails') {
                field.forEach(element => {
                    emails.push(element);
                });
            }

            if (i === 'Alerts') {
                field.forEach(element => {
                    alerts.push(element);
                });
            }
        });
    });

    console.log(emails, alerts)



    //Drop Downs





});