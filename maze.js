$(document).ready(function(){
    $("#start").click(function(){
        if($(".boundary").hasClass("youlose")) $(".boundary").removeClass("youlose");
        $("h2").text('Click the "S" to begin.');
        $("#maze").mouseleave(function(){
            $(".boundary").addClass("youlose");
        });
        $(".boundary").mouseover(function(){
            $(".boundary").addClass("youlose");
        });
        $("#end").mouseover(function(){
            if($(".boundary").hasClass("youlose")) {
                $("h2").text("Sorry! You lost. :[");
            } else {
                $("h2").text("You win! :]");
            }
        });
    });
    $("#maze").mousemove(function(event){
        $("span").text(event.pageX + ", " + event.pageY);
    });
});