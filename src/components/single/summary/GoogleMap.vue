<template>
  <div class="sv-googleMap">
    <div id="sv_googleMap_container" style="height: 180px; width: 100%"></div> 
  </div>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    name: 'sv-googleMap',
    props: ['lat', 'lng','gmapScale'],
    data() {
      return {
        key: 'AIzaSyCm_mBbcHow6L8IDEJvWFdZ8q0F-R_RhS0'
      }
    },
    watch: {
      lat() { this.renderMap(); },
      lng() { this.renderMap(); },
	  gmapScale() { this.renderMap(); },
    },
    methods: {
      renderMap() {
        var LAT = this.lat;
        var LNG = this.lng;
        var scale= this.gmapScale;
        if(scale == null || scale == ''){
            scale = 18;
        }
        GoogleMapsLoader.KEY = this.key;
        GoogleMapsLoader.load(function(google) {
          var calculateDu = function(value) {
            value = value.replace(/\s+/g, '');
            var isN = /N/i.test(value);
            var isE = /E/i.test(value);
            var d = /\d+(?=°)/.exec(value)
            var f = /\d+(?=')/.exec(value)
            var m = /\d+(?:\.\d+){0,1}(?=")/.exec(value)
            var f = parseFloat(f) + parseFloat(m / 60);
            var du = parseFloat(f / 60) + parseFloat(d);
            return du;
          }
          var center = new google.maps.LatLng(calculateDu(LAT), calculateDu(LNG));
          var mapProp = {
              center: center,
              zoom: scale,
              streetViewControl: false,
              mapTypeId: google.maps.MapTypeId.HYBRID
          };
		 
          var marker = new google.maps.Marker({
              position: center,
          });
          var map = new google.maps.Map(document.getElementById("sv_googleMap_container"), mapProp);
          marker.setMap(map);
        })
      }
    }
  }
</script>

