// Do not delete
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var wordVal = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time, wordVal);
        localStorage.setItem(time, wordVal);
        
    });
    // Target id & description, add value of localStorage-getItem to that hour

    // Conditional to update colors of hours

    // Add current time (line 29) set text to date
});
//Don't do anything below