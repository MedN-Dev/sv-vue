<template>
  <div class="sv-page-summary">
    <sv-dashboard></sv-dashboard>
    <sv-panel title="発電実績">
      <!-- 图表1 -->
      <sv-highCharts id="sv_hightCharts_se" :options=chart_se_options></sv-highCharts>
    </sv-panel>
    <sv-panel title="Portfolio">
      <!-- Radio Button -->
      <v-layout row wrap text-xs-center>
        <v-flex xs12 sm6 class="py-2">
          <v-btn-toggle v-model="trigger" mandatory>
            <v-btn flat value="left">
              発電所数(箇所)
            </v-btn>
            <v-btn flat value="right">
              パネル出力(MW)
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
      <!-- 图表2 -->
      <sv-highCharts id="sv_hightCharts_sp" :options=chart_sp_options></sv-highCharts>
      <!-- 项目列表 -->
      <sv-projectList></sv-projectList>
    </sv-panel>
  </div>
</template>

<script>
import SVPanel from '@/components/common/Panel.vue'
import SVDashboard from '@/components/common/Dashboard.vue'
import SVProjectList from '@/components/common/ProjectList.vue'
import SVHighcharts from '@/components/common/Highcharts.vue'
import { SUMMARY_PORTFOLIO, SUMMARY_ENERGY } from '@/utils/highChartsOption'

export default {
  name: 'sv-summary',
  props: {
    category: String // 项目分类
  },
  components: {
    'sv-dashboard': SVDashboard,
    'sv-projectList': SVProjectList,
    'sv-panel': SVPanel,
    'sv-highCharts': SVHighcharts
  },
  data() {
    return {
      trigger: 'left',
      dashboard: [],
      chart_se_options: SUMMARY_ENERGY,
      chart_sp_options: SUMMARY_PORTFOLIO,
    }
  },
  watch: {
    category(val, oldVal) {
      // 刷新页面
      // loadPage(category, page)
    },
    trigger(val, oldVal) {
      if(val === 'left'){
        this.chart_sp_options = SUMMARY_PORTFOLIO;
      }else{
        this.chart_sp_options = SUMMARY_ENERGY;
      }
    }
  },
  mounted() {
    // loadPage(category, page)
  },
  methods: {
    loadPage(category, page) {
      // 装载 dashboard
      // 装载发电实际图表
      // 装载两组发电Porfolio图表
      // 装载项目列表
    }
  }
}
</script>

<style>
.sv-page-summary{
  display: inline;
  text-align: center;
}
.theme--dark .v-btn-toggle{
  background: transparent;
}
</style>