<template>
  <div class="sv-baiduMap">
    <div id="sv_baiduMap_container" style="height: 180px; width: 100%"></div> 
  </div>
</template>

<script>
    export default {
      name: 'sv-baiduMap',
      data() {
        return {

        }
      },
      mounted() {
        let map = new BMap.Map("sv_baiduMap_container");
        let point = new BMap.Point(139.760089,35.676266);
        map.centerAndZoom(point, 15);  
      }
    }
</script>

<style>

</style>

