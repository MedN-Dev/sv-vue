<template>
  <div class="sv-page-summarySingle">
    <sv-dashboard></sv-dashboard>
    <!-- 轮播图 -->
    <v-carousel class="sv-page-summarySingle-carousel" dark hide-controls hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- 项目明细 -->
    <sv-panel title="Detail">
      <sv-detailTable></sv-detailTable>
    </sv-panel>
    <!-- 百度地图 -->
    <sv-baiduMap></sv-baiduMap>
  </div>
</template>

<script>
import SVDashboard from '@/components/common/Dashboard.vue'
import SVPanel from '@/components/common/Panel.vue'
import SVDetailTable from '@/components/common/DetailTable.vue'
import SVBaiduMap from '@/components/common/BaiduMap.vue'
import SVBannerImg from '@/assets/sv-banner-2.png'
export default {
  components: {
    'sv-dashboard': SVDashboard,
    'sv-panel': SVPanel,
    'sv-detailTable': SVDetailTable,
    'sv-baiduMap': SVBaiduMap
  },
  data() {
    return {
      items: [
        {
          src: SVBannerImg
        },
        {
          src: SVBannerImg
        },
        {
          src: SVBannerImg
        }
      ]
    }
  }
}
</script>

<style>
.sv-page-summarySingle{
  display: inline;
  text-align: center;
}
.sv-page-summarySingle-carousel{
  height: 180px;
  margin-bottom: 4px;
}
</style>



