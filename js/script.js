$(document).ready(function() {
    $(".theButton").on("click", function() {
        var color = $(this).css("background-color");
        $(".superButton").text(color);
    });
    //Change the text in the reset button to display the colour (RGB) of the selected panel.
});

