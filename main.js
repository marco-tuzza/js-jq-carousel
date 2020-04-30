$(".fa-chevron-circle-right").click(
    function() {

    var visibleImage = $(".active")
    var nextImage = visibleImage.next()
    if (nextImage.length) {
        visibleImage.removeClass('active')
        nextImage.addClass('active')
    } else {
        visibleImage.removeClass('active')
        $("img:first-child").addClass('active')
    }

    }
)

$(".fa-chevron-circle-left").click(
    function() {

    var visibleImage = $(".active")
    var prevImage = visibleImage.prev()

    if (prevImage.length) {
        visibleImage.removeClass('active')
        prevImage.addClass('active')
    } else {
        visibleImage.removeClass('active')
        $("img:last-child").addClass('active')
    }

    }
)
