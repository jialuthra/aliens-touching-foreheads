const map = L.map('map').setView([30.2672, -97.7431], 12)
//                                 ^ Austin lat/lng    ^ zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

const locations = [
    { name: "Central Texas Food Bank", lat: 30.2089, lng: -97.7339 },
    // continue this format
]

locations.forEach(loc => {
    L.marker([loc.lat, loc.lng])
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b>`)
})
