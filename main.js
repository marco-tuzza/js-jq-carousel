$(".fa-chevron-circle-right").click(
    function() {

    var visibleImage = $(".active")
    var nextImage = visibleImage.next("img")
    var activeCircle = $(".slider-nav > .fas")
    var nextCircle = activeCircle.next()

    if (nextImage.length) {
        visibleImage.removeClass("active")
        nextImage.addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass ("far")
        nextCircle.removeClass ("far")
        nextCircle.addClass ("fas")
    } else {
        visibleImage.removeClass("active")
        $("img:first-child").addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass ("far")
        $(".slider-nav > i:first-of-type").addClass("fas")
    }

    }
)

$(".fa-chevron-circle-left").click(
    function() {

    var visibleImage = $(".active")
    var prevImage = visibleImage.prev("img")
    var activeCircle = $(".slider-nav > .fas")
    var prevCircle = activeCircle.prev()

    if (prevImage.length) {
        visibleImage.removeClass("active")
        prevImage.addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass("far")
        prevCircle.removeClass("far")
        prevCircle.addClass("fas")
    } else {
        visibleImage.removeClass("active")
        $("img:last-of-type").addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass("far")
        $(".slider-nav > i:last-of-type").removeClass("far")
        $(".slider-nav > i:last-of-type").addClass("fas")

    }

    }
)

$(".slider-nav > i").click(
    function() {
        var visibleImage = $(".active")
        var activeIcon = $(".slider-nav > .fas")
        var index = $(this).index()

        visibleImage.removeClass("active")
        $(".slider > img").eq(index).addClass("active")
        activeIcon.removeClass("fas")
        activeIcon.addClass("far")
        $(".slider-nav > i").eq(index).addClass("fas")
    }
)

$(".fa-play").click(

    function() {

        $(".autoplay > i").toggleClass("active-icon")

        autoplay = setInterval(function(){

            var visibleImage = $(".active")
            var nextImage = visibleImage.next("img")
            var activeCircle = $(".slider-nav > .fas")
            var nextCircle = activeCircle.next()

            if (nextImage.length) {
                visibleImage.removeClass("active")
                nextImage.addClass("active")
                activeCircle.removeClass("fas")
                activeCircle.addClass ("far")
                nextCircle.removeClass ("far")
                nextCircle.addClass ("fas")
            } else {
                visibleImage.removeClass("active")
                $("img:first-child").addClass("active")
                activeCircle.removeClass("fas")
                activeCircle.addClass ("far")
                $(".slider-nav > i:first-of-type").addClass("fas")
            }

        }, 2000);
    }
)

$(".fa-pause").click(function () {
    $(".autoplay > i").toggleClass("active-icon")
    clearInterval(autoplay);
});
