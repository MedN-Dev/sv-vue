<template>
  <div class="sv-googleMap">
    <div id="sv_googleMap_container" style="height: 180px; width: 100%"></div> 
  </div>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    name: 'sv-googleMap',
    data() {
      return {
        lat: '',
        lng: ''
      }
    },
    mounted() {
      this.renderMap();
    },
    methods: {
      renderMap() {
        GoogleMapsLoader.load(function(google) {
          var map;
          console.log(google);
          function initMap() {
            map = new google.maps.Map(document.getElementById('sv_googleMap_container'), {
                center: { lat: 39.01, lng: 141.27 },
              zoom: 10
            });
          }
          function initialize() {
            var lat = calculateDu("38°56'19.98\"N");
            var lng = calculateDu("141°21'43.81\"E");
            var center = new google.maps.LatLng(lat, lng)
            var mapProp = {
                center: center,
                zoom: 18,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            var marker = new google.maps.Marker({
                position: center,
            });
            var map = new google.maps.Map(document.getElementById("sv_googleMap_container"), mapProp);
            marker.setMap(map);
          }
          google.maps.event.addDomListener(window, 'load', initialize);
          function calculateDu(value) {
            value = value.replace(/\s+/g, '');
            var isN = /N/i.test(value);
            var isE = /E/i.test(value);
            var d = /\d+(?=°)/.exec(value)
            var f = /\d+(?=')/.exec(value)
            var m = /\d+(?:\.\d+){0,1}(?=")/.exec(value)
            var f = parseFloat(f) + parseFloat(m / 60);
            var du = parseFloat(f / 60) + parseFloat(d);
            console.log(du);
            return du;
          }
        })
      }
    }
  }
</script>

