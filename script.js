function initMap() {
  var location = { lat: -23.550520, lng: -46.633308 }; // Substitua com suas coordenadas reais

  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 15,
    center: location
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
