<template>
  <div class="sv-page-summarySingle">
    <sv-dashboard></sv-dashboard>
    <!-- 静态图 -->
    <v-jumbotron
      :gradient="gradient"
      dark
      :src="items[0].src"
      height="180px"
      class="sv-page-summarySingle-carousel"
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-13"></h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <!-- 轮播图 -->
    <!-- <v-carousel class="sv-page-summarySingle-carousel" dark hide-controls hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel> -->
    <!-- 项目明细 -->
    <sv-panel>
      <!-- <v-card-text class="sv-panel-next" align="right" slot="right">
        <v-icon small color="sv_gray" @click="goDetailPage">keyboard_arrow_right</v-icon>
      </v-card-text> -->
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
      details: [],
      gradient: 'to top right, rgba(44,48,59, .7), rgba(31,33,45, .3)'
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
        if(res.code === 0){
          this.details = this.filterProjectDetail(res.data);
        }
      })
    },
    // 清洗数据源
    filterProjectDetail(items) {
      return items.map((item)=>{
        return { title: item.name, descript: item.value };
      })
    },
    goDetailPage() {
      //this.$router.push('/project/91/detail?name=鹿屋市高隈第1');
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



