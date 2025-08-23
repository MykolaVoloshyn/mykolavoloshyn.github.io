$(document).ready(function () {
    //Shrinks navbar when the page is scrolled down by 70px
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 80) {
            $(".nav-bar").addClass("navbar-scrolled");
        } else {
            $(".nav-bar").removeClass("navbar-scrolled");
        }
    });
});
