$('img').hide();

$('#show_click').click( function () {
    $('#click_change').css('color', 'red');
});
$('#show_hide').click( function () {
    $('#hide_change').hide();
});
$('#show_show').click( function () {
    $('#show_change').show();
});
$('#show_toggle').click( function () {
    $('#toggle_change').toggle();
});
$('#show_slide_down').click( function() {
    $('#slide_down_change').slideDown();
});
$('#show_slide_up').click( function() {
    $('#slide_up_change').slideDown();
});
$('#show_slide_toggle').click( function() {
    $('#slide_toggle_change').slideToggle();
});
$('#fade_in_click').click( function() {
    $('#fade_in_change').fadeIn();
});
$('#fade_out_click').click( function() {
    $('#fade_out_change').fadeOut();
});
$('#show_add_class').click( function() {
    $('#add_class_change').addClass("blue");
})
$('#show_before').click( function() {
    $('#before_change').before("This text was added before the initial text! ");
});
$('#show_after').click( function() {
    $('#after_change').after(" This text was added after the initial text! ");
});
$('#show_append').click( function() {
    $('#append_change').append("<p>This element was appended!</p>");
});
$('#show_html').click( function() {
    $('#html_change').html("<h1>This element was changed!!!</h1>");
});
$('#show_attr').click( function() {
    $('#attr_change').attr("href", "http://google.com");
});
$('#show_val').click( function() {
    $('#val_change').val("updated text");
});
$('#show_text').click(function() {
    $('#text_change').text("This text has been changed!")
})
