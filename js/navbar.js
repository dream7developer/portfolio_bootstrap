$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
    }
});



$('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('label').removeClass('active');
    }
});





$(".bs-js-navbar-scrollspy li a[href^='#']").on('click', function(event) {
    var target = this.hash;

    event.preventDefault();

    var navOffset = $('#navbar').height();

    return $('html, body').animate({
        scrollTop: $(this.hash).offset().top - navOffset
    }, 300, function() {
        return window.history.pushState(null, null, target);
    });
});

