

var $select = jQuery("<select id='selectmenu'></select>");
jQuery("#mainmenu").append($select);

$select.change(function () {
    window.location = $select.val();
});

jQuery("#mainmenu a").each(function () {
    var $option = jQuery("<option></option>");
    $option.val(jQuery(this).attr("href"));
    $option.text(jQuery(this).text());
    if (jQuery(this).parent().hasClass("selected")) {
        $option.prop("selected", true)
    }
    $select.append($option);
});
