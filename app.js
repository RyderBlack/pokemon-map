function initMap() {
    let marseille = {
        lat: 43.26067482931536,
        lng: 5.383000373840332
    };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: marseille
    });
    let marker = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: marseille,
        map: map,
        icon: 'images/pikachu32.png'
    });
    marker.addListener('click', toggleBounce)

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
    });

}




/*
let addMarker = function () {

let marker = new google.maps.Marker({
  draggable: true,
  animation: google.maps.Animation.DROP,
  position: marseille,
  map: map,
  icon: 'images/pikachu32.png'
});
marker.addListener('click', toggleBounce)

}

map.addListener('click', addMarker);
*/
