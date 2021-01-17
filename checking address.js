
<div class="map-container">

<div id="map"></div>
</div>
<style>
    #map {
      height: 100%;
    }
    .map-container {
        height: 100%;
        padding: 0;
        margin: 10%
      }
  </style>
<script>
    if ('geolocation' in navigator) {
        console.log('available');
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.longitude)
            console.log(position.coords.latitude)
        })
    }
    else{
        console.log('unavailable');
    }
</script>
<script>
        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -36.851992, lng: 174.762591},
                zoom: 7
            });
            map.setOptions({ minZoom: 5, maxZoom: 16 });
            setMarkers(map) 

            var addressLatLngyes=new google.maps.LatLng(-36.28333, 174.51667)
            var addressLatLngNo=new google.maps.LatLng(32.945048, -117.243135)
            var addressLatLngNo2 = new google.maps.LatLng(-41.2867,174.7730)
            //Cords
            const zone3coords = [
                { lng : 175.1427764, lat : -36.3346864 },
                { lng :174.3380279,lat : -36.0309761 },
                { lng :173.9040679,lat : -36.4695358 },
            ];
          //name
        const zone3 = new google.maps.Polygon({ paths: zone3coords });
        var result=checkIfPartOfzone3(addressLatLngyes,zone3)
      console.log(result);


        }
//add new code

  function checkIfPartOfzone3(addressLatLng, zone) {
    return google.maps.geometry.poly.containsLocation(addressLatLng, zone);
}


function setMarkers(map) {

    const image = {
    url: "/KML/plantme_logo.png",
     
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

    new google.maps.Marker({
      position: { lat: homelat, lng: homelng },
      map,
      icon: image,
      shape: shape,
      index:'homeaddresstext'

    });
}
</script>
<script defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD22dKmVH-G1QQuc3jiAwczI5Xvb_vCdBg&language=en&callback=initMap&&libraries=geometry&v=weekly"      
></script>
