<template>
  <div class="sv-baiduMap">
    <div id="sv_baiduMap_container" style="height: 200px; width: 100%"></div> 
  </div>
</template>

<script>
    export default {
      data() {
        return {

        }
      },
      mounted() {
        var map = new BMap.Map("sv_baiduMap_container");
        var point = new BMap.Point(139.760089,35.676266);
        map.centerAndZoom(point, 15);  
      }
    }
</script>

<style>

</style>

