var lat = 45.3967525;
var long = 11.8717103;
var map = null;

function init() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(lat,long),
		disableDefaultUI: true,
		scrollwheel: false,
		draggable: false,
		styles: [{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 29
			}, {
				"weight": 0.2
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 18
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 16
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 21
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#000000"
			}, {
				"lightness": 16
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"saturation": 36
			}, {
				"color": "#000000"
			}, {
				"lightness": 60
			}]
		}, {
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 19
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}, {
				"weight": 1.2
			}]
		}]
	};

	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');

	// Create the Google Map using out element and options defined above
	map = new google.maps.Map(mapElement, mapOptions);

	// Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
	var image = 'images/map-marker.png';
	var myLatLng = new google.maps.LatLng(lat,long);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});
	beachMarker.addListener('click', function() {
      window.open("https://www.google.com/maps/place/Gialma+Investigazioni/@45.396753,11.873899,15z/data=!4m5!3m4!1s0x0:0x4a9a5757e20a656c!8m2!3d45.396753!4d11.873899", "_blank")
    });
}

function initMap() {
	google.maps.event.addDomListener(window, 'load', init);
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(new google.maps.LatLng(lat,long));
	});
}