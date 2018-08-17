<template>
  <div class="sv-page-summarySingle">
    <sv-dashboard :dashboard="dashboard"></sv-dashboard>
    <!-- 轮播图 -->
    <v-carousel v-if="images.length>0" class="sv-page-summarySingle-carousel" dark hide-controls>
      <v-carousel-item
        v-for="(img,i) in images"
        :key="i"
        :src="img"
      ></v-carousel-item>
    </v-carousel>
    <!-- 项目明细 -->
    <sv-panel>
      <sv-detailTable :tableList="details" :pageSize="details.length"></sv-detailTable>
    </sv-panel>
    <!-- 谷歌地图 -->
    <sv-googleMap :lat="lat" :lng="lng"></sv-googleMap>
    <!-- 百度地图 -->
    <!-- <sv-baiduMap></sv-baiduMap> -->
  </div>
</template>

<script>
import SVDashboard from '@/components/common/Dashboard.vue'
import SVPanel from '@/components/common/Panel.vue'
import SVDetailTable from '@/components/common/DetailTable.vue'
import SVGoogleMap from '@/components/single/summary/GoogleMap.vue'
import SVBaiduMap from '@/components/single/summary/BaiduMap.vue'
import SVBannerImg from '@/assets/sv-banner-2.png'
import { Project, Widgets } from '@/http/api'
export default {
  name: 'sv-summarySingle',
  props: ['id'],
  components: {
    'sv-dashboard': SVDashboard,
    'sv-panel': SVPanel,
    'sv-detailTable': SVDetailTable,
    'sv-baiduMap': SVBaiduMap,
    'sv-googleMap': SVGoogleMap
  },
  data() {
    return {
      dashboard: [],
      images: [],
      details: [],
      gradient: 'to top right, rgba(44,48,59, .7), rgba(31,33,45, .3)',
      lat: '',
      lng: ''
    }
  },
  mounted() {
    this.fetchProjectDetail();
    this.fetchDashboard();
  },
  methods: {
    // 获取面板指标
    fetchDashboard() {
      this.$axios.get(Widgets.Data, {pid: this.id, type: 'summary'})
      .then((res)=>{
        if(res.code === 0){ this.dashboard = this.filterDashboard(res.data); }
      })
    },
    // 清洗面板数据源
    filterDashboard(items) {
      return items.map((item) => {
        return { name: item.label, unit: item.unit, value: item.value };
      })
    },
    // 获取项目明细
    fetchProjectDetail() {
      this.$axios.get(Project.Infoes,{ pid: this.id })
      .then((res)=>{
        if(res.code === 0){
          this.details = this.filterProjectDetail(res.data.items);
          this.setMapConfig(res.data.latitude, res.data.longitude);
          this.images = res.data.images;
          //this.images = [SVBannerImg,SVBannerImg,SVBannerImg];
        }
      })
    },
    // 清洗项目明细数据源
    filterProjectDetail(items) {
      return items.map((item)=>{
        return { title: item.name, descript: item.value };
      })
    },
    // 设置地图经纬度
    setMapConfig(lat, lng) {
      this.lat = lat;
      this.lng = lng;
    },
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
.sv-page-summarySingle .v-carousel__controls{
  background: transparent;
}
.sv-page-summarySingle .v-carousel__controls__item i{
  font-size: 12px !important; 
}
</style>



