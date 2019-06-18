
//When a colored panel is clicked, all panels vanish
//When a colored panel is clicked, just that panel disappears
//When a panel is clicked, all siblings fade to 10% opacity
//When reset is clicked, all panels revert to full opacity
//When the mouse hovers over a panel, that panel turns black
//When the mouse moves away, the panel reverts back to its previous colour//        var panelColour = $(this).css("background-color");



$(".container").on("click", function() {
    $("div").hide('slow');
})


$(".theButton").on("click", function() {
    $(this).hide('slow');
})


//waits until page is ready
$(document).ready(function() {

    //will need to comment out some code when trying to view effects on theeir own


    //hides all panels when a panel is clicked
    $(".theButton").click(function() {
        $("#panel .container").siblings().hide();
    })


    //hides only the panel that was clicked
    $(".theButton").click(function() {
        $(this).hide();
    })

    //adds  a fadeTo to all panels when a panel is clicked
    $(".theButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, .5);
    });


    //restores all panels to full opacity when reset button clicked 
    $(".superButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, 1);
    });

    //turns panel background black on mouseenter
    $(".theButton").mouseenter(function() {
        $(this).addClass("makeBlack");
    });

    //returns to original colour on mouseout 
    $(".theButton").mouseout(function() {
        $(this).removeClass("makeBlack");
    });


//Correct JS code below:

});
    $("div").on("click", function() {
        $("div").siblings().fadeTo("slow", .5);
    });
    $(".superButton").on("click", function() {
        $("div").siblings().fadeTo("slow", 1);
    });
    $(".theButton").mouseenter(function() {
        $(this).addClass("makeBlack");
    });
    $('.theButton').mouseleave(function() {
        $(this).removeClass("makeBlack");
    });