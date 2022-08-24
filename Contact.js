// Initialize and add the map
function initMap() {
    // The location of Cluck Clucks
    const cluckClucksChicken = { lat: 50.83, lng: -0.141 };
    // The map, centered at Cluck Clucks
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: cluckClucksChicken,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    });
    // The marker, positioned at Cluck Clucks
    const marker = new google.maps.Marker({
        position: cluckClucksChicken,
        map: map,
    });
}

window.initMap = initMap;