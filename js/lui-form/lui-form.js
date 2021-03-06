$(document).ready(function() {
    // JQUERY UI SELECT
    $("select.make_lui_select").each(function() {
        $(this).parent().append('<div class="ui-js-dropdown"><div class="inside"></div></div>');
        var dropdown = $(this).siblings(".ui-js-dropdown").children(".inside");
        $(this).selectmenu({ appendTo: dropdown });
    });
    $("input.make_lui_datepicker").each(function() {
        if ($(this).attr("data-format")) {
            var format = $(this).attr("data-format");
        } else {
            var format = "yy-mm-dd";
        }
        $(this).datepicker({
            dateFormat: format
        });
    });
    $("input.make_lui_datepicker_select").each(function() {
        if ($(this).attr("data-format")) {
            var format = $(this).attr("data-format");
        } else {
            var format = "yy-mm-dd";
        }
        $(this).datepicker({
            dateFormat: format,
            changeMonth: true,
            changeYear: true
        });
    });
});