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
      <sv-detailTable :tableList="details"></sv-detailTable>
    </sv-panel>
    <!-- 百度地图 -->
    <sv-baiduMap></sv-baiduMap>
  </div>
</template>

<script>
import SVDashboard from '@/components/common/Dashboard.vue'
import SVPanel from '@/components/common/Panel.vue'
import SVDetailTable from '@/components/common/DetailTable.vue'
import SVBaiduMap from '@/components/single/summary/BaiduMap.vue'
import SVBannerImg from '@/assets/sv-banner-2.png'
import { Project } from '@/http/api'
export default {
  name: 'sv-summarySingle',
  props: ['id'],
  components: {
    'sv-dashboard': SVDashboard,
    'sv-panel': SVPanel,
    'sv-detailTable': SVDetailTable,
    'sv-baiduMap': SVBaiduMap
  },
  data() {
    return {
      items: [ 
        { src: SVBannerImg },
        { src: SVBannerImg },
        { src: SVBannerImg }
      ],
      details: [
        { title: '所在地', descript: '岩222手县一关市', },
        { title: 'Panel出力', descript: '10,793.64KW', },
        { title: 'Panel枚数', descript: '42,328枚', },
        { title: '発電設備容量', descript: '7,920KW', },
        { title: 'FIT価格', descript: '36円/KWH', },
        { title: '年間予想発電量', descript: '11,473,361/KWH', },
        { title: '運転開始日', descript: '2015/12/20', }
      ]
    }
  },
  mounted() {
    this.fetchProjectDetail();
  },
  methods: {
    // 获取项目
    fetchProjectDetail() {
      this.$axios.get(Project.Items,{ pid: this.id })
      .then((res)=>{
        this.details = this.filterProjectDetail(res.data);
      })
    },
    // 清洗数据源
    filterProjectDetail(items) {
      return items.map((item)=>{
        return { title: item.name, descript: item.value };
      })
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



