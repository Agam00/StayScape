let lat = listing.geometry.lat;
let lng = listing.geometry.lng;
var map = L.map("map").setView([lat, lng], 13);
var marker = L.marker([lat, lng]).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 13,
  attribution: "&copy; OpenStreetMap",
}).addTo(map);
var popup = L.popup();

function onMapClick(e) {
  marker.bindPopup(`<b>${listing.title}</b><br>Exact location will be provided after booking.`).openPopup();
}

map.on("click", onMapClick);
