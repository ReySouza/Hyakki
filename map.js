var map;
var roadmapView = true;

function initMap() {
  map = L.map("map").setView([37.0902, 138.5], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  var toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = "Toggle View";
  toggleBtn.style.position = "absolute";
  toggleBtn.style.top = "10px";
  toggleBtn.style.right = "10px";
  toggleBtn.addEventListener("click", function() {
    if (roadmapView) {
      // Add code to switch to satellite view here
      roadmapView = false;
    } else {
      // Add code to switch back to roadmap view here
      roadmapView = true;
    }
  });
  document.body.appendChild(toggleBtn);
}
