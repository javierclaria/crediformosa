$(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $('.menu.main ul').slideToggle(200);
        e.preventDefault();
    });
});