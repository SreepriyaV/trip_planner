const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");
const fetch=require('./fetch.js');

mapboxgl.accessToken = "pk.eyJ1IjoiZ3JhY2Vob3BwZXIxNzA5IiwiYSI6ImNqOGJxcjF0ajAwdmcycXA3czU1OTA0ODUifQ.B9FFZRTrhXtxIFuFuXqZQQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);

