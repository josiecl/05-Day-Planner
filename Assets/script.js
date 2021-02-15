// Do not delete
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var wordVal = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time, wordVal);
        localStorage.setItem(time, wordVal);
        
    });

    // Target id & description, add value of localStorage.getItem to that hour
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    // Conditional to update colors of hours
    function colorUpdator() {
        var currentHour = moment().hours();
        console.log(currentHour);
        $(".time-block").each( function() {
            var blockHour = parseInt($(this).attr("id"));
            if (blockHour < currentHour) {
                $(this).addClass("past")
            }
            else if (blockHour === currentHour) {
                $(this).addClass("present")
            }
            else {
                $(this).addClass("future")
            }
        })
    }

    colorUpdator();


    // Post the current time to the page
    var currentDay = document.querySelector("#currentDay");
    var currentTime = moment();
    currentDay.append(currentTime.format("MMMM Do YYYY, dddd, h:mm A"));

});
//Don't do anything below