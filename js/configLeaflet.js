// Crear el mapa
const map = L.map("map");
map.setView({ lat: -5.02815, lng: -78.88077 }, 12);


/* GeoJson */
const geoquanda = L.geoJson(quanda).addTo(map);
const georios = L.geoJson(rios).addTo(map);
