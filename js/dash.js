//JS File for Dashboard
$(document).ready(function() {
    var emails = []; //holds email objects
    var tasks = []; //holds alert objects

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
                    tasks.push(element);
                });
            }
        });
    });
});