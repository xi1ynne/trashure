var map = L.map('map').setView([37.5500, -121.9833], 9); // Centered on Greater Silicon Valley

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

<<<<<<< HEAD
var markers = []; // Array to keep track of markers

var locations = [
    // Example locations with e-waste subcategories
    { coordinates: [37.5072, -122.2654], category: 'e-waste', subcategory: ['monitors','computers','cell phone','batteries'], info: '<b>Shoreway Environmental Center</b><br>333 Shoreway Road, San Carlos, CA 94070' },
    { coordinates: [37.4283, -121.9076], category: 'e-waste', subcategory: ['monitors', 'computers'], info: '<b>Green E-Waste Recycling Center</b><br>1664 Watson Court, Milpitas, CA 95035' },
    { coordinates: [37.59318372955853, -122.03808654232894], category: 'e-waste', subcategory: ['monitors', 'computers'], info: '<b>Recycle1234.com</b><br>33548 Central Ave, Union City CA 94587 USA' },
    { coordinates: [37.62821693467349, -122.10852946168214], category: 'e-waste', subcategory: ['monitors', 'computers'], info: '<b>Rica Recycling</b><br>27105 Industrial Blvd, Hayward CA ' },

    // Additional locations can be added here...
];

=======
var markers = []; 

var locations = [

    { coordinates: [37.517514547903524, -122.2584655752255], category: 'e-waste', subcategory: ['monitor','computer','cellphone','battery', 'copier', 'television'], info: '<b>Shoreway Environmental Center</b><br>333 Shoreway Road, San Carlos, CA 94070<br><a href=https://rethinkwaste.org/shoreway-environmental-center/location-hours/>Website</a>' },
    { coordinates: [37.517514547903524, -122.2584655752255], category: 'houseApp', subcategory: ['coffeeMachine', 'microwave', 'smallApp'], info: '<b>Shoreway Environmental Center</b><br>333 Shoreway Road, San Carlos, CA 94070<br><a href=https://rethinkwaste.org/shoreway-environmental-center/location-hours/>Website</a>' },
    { coordinates: [37.517514547903524, -122.2584655752255], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>Shoreway Environmental Center</b><br>333 Shoreway Road, San Carlos, CA 94070<br><a href=https://rethinkwaste.org/shoreway-environmental-center/location-hours/>Website</a>' },

    { coordinates: [37.41113909740687, -121.88361826359153], category: 'e-waste', subcategory: ['television','computer','server','lapton','monitor','battery','tablet'], info: '<b>Green E-Waste Recycling Center</b><br>1664 Watson Court, Milpitas, CA 95035<br><a href=https://gerecycle.com/ewaste-recycling/drop-off/>Website</a>' },
    { coordinates: [37.41113909740687, -121.88361826359153], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>Green E-Waste Recycling Center</b><br>1664 Watson Court, Milpitas, CA 95035<br><a href=https://gerecycle.com/ewaste-recycling/drop-off/>Website</a>' },

    { coordinates: [37.40170552979696, -122.10996801050791], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>600 Showers Dr, Mountain View, CA 94040<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.40170552979696, -122.10996801050791], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>600 Showers Dr, Mountain View, CA 94040<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.52732218690878, -122.00221811832091], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>2086 NewPark Mall, Newark, CA 94560<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.52732218690878, -122.00221811832091], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>600 Showers Dr, Mountain View, CA 94040<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.43228319216546, -121.92143495651978], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>301 Ranch Dr, Milpitas, CA 95035<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.43228319216546, -121.92143495651978], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>301 Ranch Dr, Milpitas, CA 95035<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.605545130866915, -122.0668890415214], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>30600 Dyer St, Union City, CA 94587<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.605545130866915, -122.0668890415214], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>30600 Dyer St, Union City, CA 94587<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.648507459915564, -122.08991524890747], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>25151 Santa Clara St, Hayward, CA 94544<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.648507459915564, -122.08991524890747], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>25151 Santa Clara St, Hayward, CA 94544<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.67237140963349, -122.08619814096386], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>2555 Mission Blvd, Hayward, CA 94541<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.67237140963349, -122.08619814096386], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>22555 Mission Blvd, Hayward, CA 94541<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.33123689069108, -121.86098066501529], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>777 Story Rd, San Jose, CA 95122<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.33123689069108, -121.86098066501529], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>777 Story Rd, San Jose, CA 95122<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.32654986028107, -121.81378281849567], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>2200 Eastridge Loop, San Jose, CA 95122<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.32654986028107, -121.81378281849567], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>2200 Eastridge Loop, San Jose, CA 95122<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.25203743288129, -121.86152444925271], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>925 Blossom Hill Road, San Jose, CA 95123<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.25203743288129, -121.86152444925271], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>925 Blossom Hill Road, San Jose, CA 95123<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.67014616296833, -122.46915557215719], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>3 Serramonte Center, Daly City, CA 94015<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.67014616296833, -122.46915557215719], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>3 Serramonte Center, Daly City, CA 94015<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.93523761035819, -122.35687666400207], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eco-ATM Kiosks</b><br>1250 Macdonald Ave, Richmond, CA 94801<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },
    { coordinates: [37.93523761035819, -122.35687666400207], category: 'e-waste', subcategory: ['cellphone'], info: '<b>eco-ATM Kiosks</b><br>1250 Macdonald Ave, Richmond, CA 94801<br><a href=https://locations.ecoatm.com/?utm_source=google&utm_medium=cpc&utm_campaign=FX_ECO_PMAX_TOF_SegmentB&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk7gHY8gtH8Kvs67DteM-ouJ1EyaC50ypjKBkwCdO82CEddpjj7cUmBoCeN8QAvD_BwE>Website</a>' },

    { coordinates: [37.59364234135939, -122.03815097964787], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>Recycle1234.com</b><br>33548 Central Ave, Union City CA 94587<br><a href=https://recycle1234.com/>Website</a>' },
    { coordinates: [37.59364234135939, -122.03815097964787], category: 'e-waste', subcategory: ['monitor','printer','networkingGear'], info: '<b>Recycle1234.com</b><br>33548 Central Ave, Union City CA 94587 USA<br><a href=https://recycle1234.com/>Website</a>' },

    { coordinates: [37.8761445755943, -122.3053952561316], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eWasteCollective</b><br>620 Page St, Berkeley, CA, 94710<br><a href=https://ewastecollective.org/electronics-recycling/>Website</a>' },
    { coordinates: [37.8761445755943, -122.3053952561316], category: 'e-waste', subcategory: ['monitor','computer','cellphone','battery', 'copier', 'television','keyboard','tablet','camera','scanner'], info: '<b>eWasteCollective</b><br>620 Page St, Berkeley, CA, 94710<br><a href=https://ewastecollective.org/electronics-recycling/>Website</a>' },
    { coordinates: [37.8761445755943, -122.3053952561316], category: 'houseApp', subcategory: ['microwave','toaster'], info: '<b>eWasteCollective</b><br>620 Page St, Berkeley, CA, 94710<br><a href=https://ewastecollective.org/electronics-recycling/>Website</a>' },

    { coordinates: [38.07094499802983, -122.5315555559599], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>eWasteCollective</b><br>42 Digital Drive, Suite 2, Novato, CA 94949<br><a href=https://ewastecollective.org/electronics-recycling/>Website</a>' },
    { coordinates: [38.07094499802983, -122.5315555559599], category: 'e-waste', subcategory: ['monitor','computer','cellphone','battery', 'copier', 'television','keyboard','tablet','camera','scanner'], info: '<b>eWasteCollective</b><br>42 Digital Drive, Suite 2, Novato, CA 94949<br><a href=https://ewastecollective.org/electronics-recycling/>Website</a>' },
    { coordinates: [38.07094499802983, -122.5315555559599], category: 'houseApp', subcategory: ['microwave','toaster'], info: '<b>eWasteCollective</b><br>620 Page St, Berkeley, CA, 94710<br><a href=https://ewastecollective.org/electronics-recycling/>Website</a>' },

    { coordinates: [37.62878581991743, -122.1086797256559], category: 'vendor', subcategory: ['recylingCenter'], info: '<b>Rica Recycling</b><br>27105 Industrial Blvd, Hayward, CA 94545<br><a href=https://www.ricarecycling.com/electronic-waste-drop-off>Website</a>' },
    { coordinates: [37.62878581991743, -122.1086797256559], category: 'e-waste', subcategory: ['monitor','computer','cellphone', 'copier', 'television','keyboard','tablet','server', 'printer'], info: '<b>Rica Recycling</b><br>27105 Industrial Blvd, Hayward, CA 94545<br><a href=https://www.ricarecycling.com/electronic-waste-drop-off>Website</a>' },
    { coordinates: [37.62878581991743, -122.1086797256559], category: 'houseApp', info: '<b>Rica Recycling</b><br>27105 Industrial Blvd, Hayward, CA 94545<br><a href=https://www.ricarecycling.com/electronic-waste-drop-off>Website</a>' },

];


>>>>>>> 93c110b (map location)
// Function to add markers
function addMarkers() {
    markers.forEach(marker => marker.remove());
    markers = [];

    var selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked:not(.e-waste):not(.vendor)')).map(e => e.id);
    var selectedEWasteSubcategories = Array.from(document.querySelectorAll('.e-waste:checked')).map(e => e.value);
<<<<<<< HEAD
=======
    var selectedHouseAppSubcategories = Array.from(document.querySelectorAll('.houseApp:checked')).map(e => e.value);
    var selectedClothingSubcategories = Array.from(document.querySelectorAll('.clothing:checked')).map(e => e.value);
>>>>>>> 93c110b (map location)
    var selectedVendorSubcategories = Array.from(document.querySelectorAll('.vendor:checked')).map(e => e.value);

    locations.forEach(function(location) {
        if (selectedCategories.length > 0 && !selectedCategories.includes(location.category)) return;
<<<<<<< HEAD

        if (location.category === 'e-waste' && selectedEWasteSubcategories.length > 0 && !selectedEWasteSubcategories.some(sub => location.subcategory.includes(sub))) return;

=======
        if (location.category === 'e-waste' && selectedEWasteSubcategories.length > 0 && !selectedEWasteSubcategories.some(sub => location.subcategory.includes(sub))) return;
        if (location.category === 'houseApp' && selectedHouseAppSubcategories.length > 0 && !selectedHouseAppSubcategories.some(sub => location.subcategory.includes(sub))) return;
        if (location.category === 'clothing' && selectedClothingSubcategories.length > 0 && !selectedClothingSubcategories.some(sub => location.subcategory.includes(sub))) return;
>>>>>>> 93c110b (map location)
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

<<<<<<< HEAD
addMarkers(); // Add initial markers
=======
addMarkers(); 
>>>>>>> 93c110b (map location)

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

<<<<<<< HEAD
['e-waste', 'vendor'].forEach(cat => {
=======
['e-waste', 'houseApp', 'clothing','vendor'].forEach(cat => {
>>>>>>> 93c110b (map location)
    document.getElementById(cat).addEventListener('change', function() {
        document.getElementById(cat + '-subcategories').style.display = this.checked ? 'block' : 'none';
        addMarkers();
    });
});


<<<<<<< HEAD
// TrashureCalendar

=======


// TrashureCalendar
>>>>>>> 93c110b (map location)
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
<<<<<<< HEAD
=======


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    if (navLinks.style.maxHeight) {
        navLinks.style.maxHeight = null;
    } else {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    }
});


>>>>>>> 93c110b (map location)
