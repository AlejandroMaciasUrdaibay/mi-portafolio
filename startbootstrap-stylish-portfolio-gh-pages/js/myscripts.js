// Initialize the map
var map = L.map('map').setView([25.592305, -103.461611], 13); // Coordinates provided by user

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
L.marker([25.592305, -103.461611]).addTo(map)
    .bindPopup('¡Aquí estoy!')
    .openPopup();