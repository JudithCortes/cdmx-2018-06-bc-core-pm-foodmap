
var map;
var infowindow;

function initMap()
{
// Creamos un mapa con las coordenadas actuales
  navigator.geolocation.getCurrentPosition(function(pos) {

  lat = pos.coords.latitude;
  lon = pos.coords.longitude;

  var myLatlng = new google.maps.LatLng(lat, lon);

  var mapOptions = {
    center: myLatlng,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById("mapa"),  mapOptions);

  // Creamos el infowindow
  infowindow = new google.maps.InfoWindow();

  // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
  var request = {
    location: myLatlng,
    radius: 5000,
    types: ['cafe']
  };

  // Creamos el servicio PlaceService y enviamos la petición.
  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, function(results, status) {
    if (status === google.maps.places.PlacesService.Status.OK) {
      for (var i = 0; i < results.length; i++) {
        crearMarcador(results[i]);
      }
    }
  });
});
}

function crearMarcador(place)
{
  // Creamos un marcador
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

// Asignamos el evento click del marcador
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
  }

  //let divMapa = document.getElementById("mapa");
//
//function fn_mal () {}

//function fn_ok (rta) {
//  let lat = rta.coords.latitude;
//  let lon = rta.coords.longitude;

//  let gLatLon = new google.maps.LatLng(lat, lon);
  
//  let objConfig = {
//    zoom : 17,
//    center : gLatLon
//  }

//  let gMapa = new google.maps.Map( divMapa, objConfig);

//}
