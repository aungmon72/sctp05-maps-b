
function initMap(canvasElementId, centerLatLng, zoomLevel = 13) {
    let map = L.map(canvasElementId);

    map.setView(centerLatLng, zoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return map;
}

function displaySearchMarkers(locations, layerGroup) {
    // remove all existing results from the search layer group
    layerGroup.clearLayers();
    for (let result of locations) {
        const latLng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
        const marker = L.marker(latLng);
        marker.bindPopup(function(){
            return `
                <h1>${result.name}</h1>
                <ul>
                    <li>Address: ${result.location.formatted_address}</li>
                    <li>Opened Now? ${result.closed_bucket}</li>
                </ul>
            `
        })
        marker.addTo(layerGroup);
    }
}

function displaySearchResults(locations, resultElement, map) {
    resultElement.innerHTML = "";
    for (let result of locations) {
        let divElement = document.createElement("div");
        divElement.className = "result"; // <div class="result">
        divElement.innerHTML = `${result.name}`;
        resultElement.appendChild(divElement);
        divElement.addEventListener("click", function(){
            const latLng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
            map.flyTo(latLng, 18);
        })
    }
}