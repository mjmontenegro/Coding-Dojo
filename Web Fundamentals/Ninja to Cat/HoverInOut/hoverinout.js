function enterFunc() {
    $(this).attr("src", "http://via.placeholder.com/200");
};
function leaveFunc() {
    $(this).attr("src", "http://via.placeholder.com/100");
}
$('img').hover(enterFunc, leaveFunc);