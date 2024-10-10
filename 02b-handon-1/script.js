document.addEventListener("DOMContentLoaded", async function () {
    let singaporeMap = L.map('map');


    singaporeMap.setView([1.3521, 103.8198], 13);


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(singaporeMap);

})
