const map = L.map('map').setView([30.2672, -97.7431], 12)
//                                 ^ Austin lat/lng    ^ zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

const locations = [
    { name: "Central Texas Food Bank", lat: 30.2089, lng: -97.7339 },
    // continue this format
]

const posts = [
    {title: "Free Bake Sale",
    location: "Republic Square Park",
    date: "Every Sunday",
    desc: "Free baked goods every Sunday morning while supplies last!"},
    {
    title: "Community Fridge",
    location: "East Austin Community Center",
    date: "Daily",
    desc: "Free fridge stocked daily — take what you need, leave what you can."
  }
];

locations.forEach(loc => {
    L.marker([loc.lat, loc.lng])
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b>`)
})