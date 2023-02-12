// Create a map object and set the view to the center of Japan
var map = L.map('map').setView([35.68, 139.69], 5);

// Add a tile layer to the map
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Add a Google satellite map as a tile layer to the map
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});

// Add the OpenStreetMap layer to the map by default
osm.addTo(map);

// Function to toggle between the two maps
function toggleMaps() {
  if (map.hasLayer(osm)) {
    map.removeLayer(osm);
    map.addLayer(googleSat);
  } else {
    map.removeLayer(googleSat);
    map.addLayer(osm);
  }
}

// Add a button to the map
var button = L.control({position: 'topright'});
button.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control');
  div.innerHTML = '<button onclick="toggleMaps()">Toggle Maps</button>';
  return div;
};
button.addTo(map);
