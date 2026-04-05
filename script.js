const map = L.map('map').setView([30.2672, -97.7431], 12)
//                                 ^ Austin lat/lng    ^ zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

const markers = {}

locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng])
        .addTo(map)
        .bindPopup(`
            <b>${loc.name}</b><br>
            📍 ${loc.location}<br>
            🕐 ${loc.hours}
            <br>
            ${truncate(loc.description)}<br>
            <br>
            <a href="bulletin.html#${loc.id}">📋 view on bulletin board</a>
        `)
    markers[loc.id] = marker
})

window.addEventListener('load', () => {
    const id = window.location.hash.replace('#', '')
    if (id && markers[id]) {
        map.setView(markers[id].getLatLng(), 15)
        markers[id].openPopup()
    }
})

function truncate(text, maxLen = 60) {
    if (text.length <= maxLen) return text
    return text.slice(0, maxLen) + '...'
}

const harnold = document.getElementById("harnold");
document.addEventListener("mousemove", (e) => {
  harnold.style.left = e.clientX + "px";
  harnold.style.top = e.clientY + "px";
});