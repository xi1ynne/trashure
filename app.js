var map = L.map('map').setView([37.5500, -121.9833], 9); // Centered on Greater Silicon Valley

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var markers = []; // Array to keep track of markers

var locations = [
    // Example locations with e-waste subcategories
    { coordinates: [37.5072, -122.2654], category: 'e-waste', subcategory: ['monitors','computers','cell phone','batteries'], info: '<b>Shoreway Environmental Center</b><br>333 Shoreway Road, San Carlos, CA 94070' },
    { coordinates: [37.4283, -121.9076], category: 'e-waste', subcategory: ['monitors', 'computers'], info: '<b>Green E-Waste Recycling Center</b><br>1664 Watson Court, Milpitas, CA 95035' },
    { coordinates: [37.59318372955853, -122.03808654232894], category: 'e-waste', subcategory: ['monitors', 'computers'], info: '<b>Recycle1234.com</b><br>33548 Central Ave, Union City CA 94587 USA' },
    { coordinates: [37.62821693467349, -122.10852946168214], category: 'e-waste', subcategory: ['monitors', 'computers'], info: '<b>Rica Recycling</b><br>27105 Industrial Blvd, Hayward CA ' },

    // Additional locations can be added here...
];

// Function to add markers
function addMarkers() {
    markers.forEach(marker => marker.remove());
    markers = [];

    var selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked:not(.e-waste):not(.vendor)')).map(e => e.id);
    var selectedEWasteSubcategories = Array.from(document.querySelectorAll('.e-waste:checked')).map(e => e.value);
    var selectedVendorSubcategories = Array.from(document.querySelectorAll('.vendor:checked')).map(e => e.value);

    locations.forEach(function(location) {
        if (selectedCategories.length > 0 && !selectedCategories.includes(location.category)) return;

        if (location.category === 'e-waste' && selectedEWasteSubcategories.length > 0 && !selectedEWasteSubcategories.some(sub => location.subcategory.includes(sub))) return;

        if (location.category === 'vendor' && selectedVendorSubcategories.length > 0 && !selectedVendorSubcategories.some(sub => location.subcategory.includes(sub))) return;

        var marker = L.marker(location.coordinates).addTo(map);
        marker.bindPopup(location.info);
        markers.push(marker);
    });
}

document.getElementById('e-waste').addEventListener('change', function() {
    document.getElementById('e-waste-subcategories').style.display = this.checked ? 'block' : 'none';
    addMarkers();
});

document.querySelectorAll('input.e-waste').forEach(function(element) {
    element.addEventListener('change', addMarkers);
});

addMarkers(); // Add initial markers

// Map search bar
function searchLocation() {
    var searchQuery = document.getElementById('search').value;
    var geocodingApi = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(searchQuery);

    fetch(geocodingApi)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = parseFloat(data[0].lat);
                var lon = parseFloat(data[0].lon);
                map.setView([lat, lon], 15);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
            alert('An error occurred while searching for the location');
        });
}

['e-waste', 'vendor'].forEach(cat => {
    document.getElementById(cat).addEventListener('change', function() {
        document.getElementById(cat + '-subcategories').style.display = this.checked ? 'block' : 'none';
        addMarkers();
    });
});


// TrashureCalendar

var currentDate = new Date('2023-08-11');

function renderCalendar() {
    var calendarBody = document.getElementById('calendar-body');
    var calendarTitle = document.getElementById('calendar-title');
    calendarBody.innerHTML = '';
    var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    calendarTitle.innerText = firstDay.toLocaleString('default', { month: 'long' }) + ' ' + firstDay.getFullYear();

    // Fill in blank days from previous month
    for (var i = 0; i < firstDay.getDay(); i++) {
        calendarBody.innerHTML += `<div class="day"></div>`;
    }

    // Fill in current month's days
    for (var i = 1; i <= lastDay.getDate(); i++) {
        calendarBody.innerHTML += `<div class="day">${i}</div>`;
    }

    // Fill in blank days from next month
    for (var i = lastDay.getDay() + 1; i < 7; i++) {
        calendarBody.innerHTML += `<div class="day"></div>`;
    }
}

function prev() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function next() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

document.addEventListener('DOMContentLoaded', renderCalendar);


// TrashureCalendar End
