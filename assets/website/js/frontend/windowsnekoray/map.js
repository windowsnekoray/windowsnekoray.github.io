var map;
$(document).ready(function () {
  map = new GMaps({
    el: '#map',
    lat: 40.712776,
    lng: -74.005974
  });
  map.addMarker({
    lat: 40.7127,
    lng: -74.005974,
  });
});