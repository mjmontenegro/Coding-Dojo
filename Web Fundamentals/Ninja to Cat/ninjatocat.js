
$('img').click(function () {
        var image = $(this);
        var newpic = "img/" + $(this).attr("other") + Math.floor(Math.random() * 5) + ".png";
        image.attr("src", newpic);
        if(image.attr("other") === "cat") {
            image.attr("other") === "ninja";
        } else {
            image.attr("other") === "cat";
        }
});


