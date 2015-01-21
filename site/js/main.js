$(function(){

    // set the height of the contentwrapper to fill the screen.
    var $cw = $('.contentwrapper');
    var winHeight = $(window).height();
    $cw.height(winHeight - $cw.position().top);

    // init leaflet
    var leafletmap = L.map('map', {
    });
    leafletmap.setView([-13, 140], 4);
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OSM</a> contributors'
    }).addTo(leafletmap);

    function resizeMap() {
        leafletmap.invalidateSize(true);
    }

    // make a convenient testing button
    $('#mapon').click(function(event){
       $('.contentwrapper').toggleClass('map-active map-inactive');
       for (var i = 1; i < 20; i++) {
           setTimeout(resizeMap, i * 50);
       }
    });


});

