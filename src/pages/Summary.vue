<template>
  <div class="sv-page-summary">
    <!-- 项目分类tabs -->
    <sv-dashboard></sv-dashboard>
    <sv-panel title="発電実績">
      <div id="sv_hightCharts_se" class="sv-hightCharts"></div>
    </sv-panel>
    <sv-panel title="Portfolio">
      <!-- Radio Button -->
      <v-layout row wrap>
        <v-flex xs12 sm6 class="py-2">
          <v-btn-toggle v-model="text">
            <v-btn flat value="left">
              発電所数(箇所)
            </v-btn>
            <v-btn flat value="center">
              パネル出力(MW)
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
      <div id="sv_hightCharts_sp" class="sv-hightCharts"></div>
    </sv-panel>
  </div>
</template>

<script>
import SVPanel from '@/components/common/Panel.vue'
import SVDashboard from '@/components/common/Dashboard.vue'
import SVNewsList from '@/components/NewsList.vue'
import Highcharts from 'highcharts'
import { HighchartsTheme } from '@/utils/highChartsTheme'
import { SUMMARY_ENERGY, SUMMARY_PORTFOLIO } from '@/utils/highChartsOption'

export default {
  data() {
    return {
      text: 'center'
    }
  },
  components: {
    'sv-dashboard': SVDashboard,
    'sv-panel': SVPanel
  },
  mounted() {
      Highcharts.setOptions(HighchartsTheme);
      Highcharts.chart('sv_hightCharts_se', SUMMARY_ENERGY);
      Highcharts.chart('sv_hightCharts_sp', SUMMARY_PORTFOLIO);
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