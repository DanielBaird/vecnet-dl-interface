
// assume jquery is available as $

// disable an input AND add a "disabled" class to its wrapper.
function disable(element) {
    var $elem = $(element);
    $elem.prop('disabled', true);
    $elem.parent().closest('.checkbox, .checkbox-inline, .radio, .radio-inline, fieldset').addClass('disabled');
}
// un-disables an input AND removes the "disabled" class from its wrapper.
function enable(element) {
    var $elem = $(element);
    $elem.prop('disabled', false);
    $elem.parent().closest('.disabled').removeClass('disabled');
}
// ------------------------------------------------------------------
(function(){

    // make a map
    var theMap = new window.VndlMap('map');

    // set the height of the contentwrapper to fill the screen
    var $cw = $('.contentwrapper');
    $cw.height($(window).height() - $cw.position().top);
    theMap.resizeFor(1.5);

    // initialise all the things..
    theMap.hide();
    disable($('input[name=searchmap]'));

    // set up the "show map" checkbox to switch the map on and off
    // and also to allow/disallow the "search map area only" check
    // box.
    $('input[name=showmap]').change( function() {
        var showmap = $('input[name=showmap]').prop('checked');
        if (showmap) {
            theMap.show();
            enable($('input[name=searchmap]'));
        } else {
            theMap.hide();
            disable($('input[name=searchmap]'));
        }
    });

})();

