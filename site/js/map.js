
// presume leaflet is present as L
// presume jquery is present as $

// ------------------------------------------------------------------

window.VndlMap = function(mapDomId, options) {
    // this.l is the leaflet map reference
    this.l = L.map(mapDomId, {
        reuseTiles: true
    });
    // this.opts is our options
    this.opts = options || {};

    this.l.setView([-13, 140], 4);
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OSM</a> contributors'
    }).addTo(this.l);
};
// ------------------------------------------------------------------
VndlMap.prototype.leaflet = function() {
    return this.l;
}
// ------------------------------------------------------------------
VndlMap.prototype.resizeFor = function(duration) {
    // repeatedly tell the map it has resized, for <duration> seconds
    duration = +duration || 1
    var interval = 100; // milliseconds

    // start resizing repeatedly
    var me = this;
    var resizingId = setInterval(function() {
        me.l.invalidateSize(true);
    }, interval);

    // stop resizing in <duration> seconds
    setTimeout(function() {
        clearInterval(resizingId);
    }, duration * 1000);
}
// ------------------------------------------------------------------
VndlMap.prototype.show = function() {
    $('body').removeClass('map-inactive').addClass('map-active');
    this.resizeFor(2);
}
// ------------------------------------------------------------------
VndlMap.prototype.hide = function() {
    $('body').removeClass('map-active').addClass('map-inactive');
    this.resizeFor(2);
}
// ------------------------------------------------------------------
// ------------------------------------------------------------------
