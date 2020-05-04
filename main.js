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

$(".slider-nav > i:first-child").click(
    function() {

        var visibleImage = $(".active")
        var firstImage = $("img:first-child")
        var activeCircle = $(".slider-nav > .fas")
        var firstCircle = $(".slider-nav > i:first-child")

        visibleImage.removeClass("active")
        firstImage.addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass("far")
        firstCircle.removeClass("far")
        firstCircle.addClass("fas")
    }
)

$(".far:nth-child(2)").click(
    function() {

        var visibleImage = $(".active")
        var secondImage = $("img:nth-child(2)")
        var activeCircle = $(".slider-nav > .fas")
        var secondCircle = $(".slider-nav > i:nth-child(2)")

        visibleImage.removeClass("active")
        secondImage.addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass("far")
        secondCircle.removeClass("far")
        secondCircle.addClass("fas")
    }
)

$(".far:nth-child(3)").click(
    function() {

        var visibleImage = $(".active")
        var thirdImage = $("img:nth-child(3)")
        var activeCircle = $(".slider-nav > .fas")
        var thirdCircle = $(".slider-nav > i:nth-child(3)")

        visibleImage.removeClass("active")
        thirdImage.addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass("far")
        thirdCircle.removeClass("far")
        thirdCircle.addClass("fas")
    }
)

$(".far:nth-child(4)").click(
    function() {

        var visibleImage = $(".active")
        var fourthImage = $("img:nth-child(4)")
        var activeCircle = $(".slider-nav > .fas")
        var fourthCircle = $(".slider-nav > i:nth-child(4)")

        visibleImage.removeClass("active")
        fourthImage.addClass("active")
        activeCircle.removeClass("fas")
        activeCircle.addClass("far")
        fourthCircle.removeClass("far")
        fourthCircle.addClass("fas")
    }
)

$(".autoplay > i").click(
    function() {

        $(".autoplay > i").toggleClass("active-icon")

        var visibleImage = $(".active")
        var nextImage = visibleImage.next("img")
        var activeCircle = $(".slider-nav > .fas")
        var nextCircle = activeCircle.next()

        setInterval(function(){

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
