<template>
  <div class="sv-googleMaps">
    <div id="sv_googleMap_protfolio" style="height: 250px; width: 100%"></div> 
  </div>
</template>
<script>
import GoogleMapsLoader from 'google-maps'
export default {
	name: "sv-googleMaps",
    props: ['items'],
    data() {
      return {
        key: 'AIzaSyCm_mBbcHow6L8IDEJvWFdZ8q0F-R_RhS0'
      }
    },
	watch:{
		items() { this.renderMap() },
	},
    methods: {
		calculateDu(value){
			value = value.replace(/\s+/g, '');
			//var isN = /N/i.test(value);
		//	var isE = /E/i.test(value);
			var d = /\d+(?=°)/.exec(value);
			var ff = /\d+(?=')/.exec(value);
			var m = /\d+(?:\.\d+){0,1}(?=")/.exec(value);
			var f = parseFloat(ff) + parseFloat(m / 60);
			var du = parseFloat(f / 60) + parseFloat(d);
			return du;
		},
		latLng(google, item){
			return new google.maps.LatLng(this.calculateDu(item.items[1]), this.calculateDu(item.items[0]))
		},
		getContent(item){
			return "<a href=/project/"+ item.id +"/summary?name="+item.name+" style='color: black;text-decoration:none'>" + item.name + "</a><div style='color:black;padding:6px 0;'>" + item.items[2] + "</div><div style='color: black'>" + item.items[3] + "</div>";
		},
    renderMap(){
			const itemsdata = this.items;
			console.log(itemsdata)
			var self = this;
			GoogleMapsLoader.KEY = this.key
			GoogleMapsLoader.load(function(google) {
				var center = new google.maps.LatLng(38.97142094697063, 134.61240234375);//self.latLng(google, items[0]);
				var mapProp = {
          center: center,  //地图的中心点
          zoom: 4,
          streetViewControl: false,
          mapTypeId: google.maps.MapTypeId.HYBRID};
				var info = new google.maps.InfoWindow();
				var map = new google.maps.Map(document.getElementById("sv_googleMap_protfolio"), mapProp);
				for(var i=0; i<itemsdata.length; i++){
					var item = itemsdata[i];
					var marker = new google.maps.Marker({
						map: map,
						animation: google.maps.Animation.DROP,
						position: self.latLng(google, item),
						title: item.id,
						item: item
					});
					google.maps.event.addListener(marker, 'click', (function(marker) {
						return function() {
							info.setContent(self.getContent(marker.item));
							info.open(map,marker);
						}
					})(marker));
        }
			})
    }
  }
}
</script>
