$(function(){

    // init leaflet
    var leafletmap = L.map('map', {
        reuseTiles: true
    });

    function resizeMap(seconds) {
        // repeatedly resize the map for however many seconds
        var interval = 100; // milliseconds

        // start resizing
        var resizingId = setInterval(function() {
            leafletmap.invalidateSize(true);
        }, interval);

        // stop resizing
        setTimeout(function() {
            clearInterval(resizingId);
        }, seconds * 1000);
    }

    // set the height of the contentwrapper to fill the screen.
    var $cw = $('.contentwrapper');
    var winHeight = $(window).height();
    $cw.height(winHeight - $cw.position().top);
    resizeMap(1.5);


    leafletmap.setView([-13, 140], 4);
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OSM</a> contributors'
    }).addTo(leafletmap);


    // make a convenient testing button
    $('#mapon').click(function(event){
       $('.contentwrapper').toggleClass('map-active map-inactive');
       resizeMap(1.5);
    });


});

