/** Sitcky Navbar On Scroll*/
// store navbar div in navbar vairable
let navbar = $(".navbar");

$(window).scroll(function () {
    //get inner height of your window
    // console.log(window.innerHeight)
    // offset method gives position of an element from top of a page 
    // console.log($(".section-2").offset().top)
    let oTop = $(".section-2").offset().top - window.innerHeight
    // console.log(oTop)
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky")
    } else {
        navbar.removeClass("sticky")
    }
});


/**Counter Animation */
let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            // How long the animation will run? 4seconds
            duration: 4000,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value))
            }
        })
    })
}

let a = 0;
$(window).scroll(function () {
    let oTop = $(".number").offset().top - window.innerHeight
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect>h1")
    }
})

// Navigate to a page
function goto(url) {
    window.location = url;

}

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    })
});