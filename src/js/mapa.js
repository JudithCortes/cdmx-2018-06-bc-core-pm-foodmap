

let divMapa = document.getElementById("mapa");
navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);

function fn_mal(){}

function fn_ok(rta){
  let lat = rta.coords.latitude;
  let lon = rta.coords.longitude;

  let gLatLon = new google.maps.LatLng(lat, lon);
  
  let objConfig = {
    zoom : 17,
    center : gLatLon,
    
  }

  let gMapa = new google.maps.Map( divMapa, objConfig);

  let objConfigMarker = {
    position: gLatLon,
    map:gMapa,
    title: "estas aquì"
  }
  let gMarker = new google.maps.Marker(objConfigMarker);


  let gCoder = new google.maps.Geocoder();

  let objInformacion = {
    adress: "Calle Tepantongo 246"
  }

  gCoder.geocode(objInformacion, fn_coder);

  function fn_coder(datos){
    let coordenadas = datos[0].geometry.location;
   
    let config = {
      map: gMapa,
      position : coordenadas,
      title: "restaurante"
    }
    let gMarkerDV = new google.maps.Marker(config)

  }
}
