<template>
  <div class="sv-page-profolio">
    <sv-dashboard></sv-dashboard>
    <sv-panel title="Portfolio">
      <!-- Radio Button -->
      <v-layout row wrap text-xs-center>
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
      <!-- 图表1 -->
      <div id="sv_hightCharts_pa" class="sv-hightCharts"></div>
      <!-- 图表2 -->
      <div id="sv_hightCharts_pb" class="sv-hightCharts"></div>
      <!-- 图表3 -->
      <div id="sv_hightCharts_pc" class="sv-hightCharts"></div>
      <!-- 项目列表 -->
      <sv-projectList></sv-projectList>
    </sv-panel>
  </div>
</template>

<script>
  import SVPanel from '@/components/common/Panel.vue'
  import SVDashboard from '@/components/common/Dashboard.vue'
  import SVProjectList from '@/components/common/ProjectList.vue'
  import Highcharts from 'highcharts'
  import { HighchartsTheme } from '@/utils/highChartsTheme'
  import { SUMMARY_PORTFOLIO } from '@/utils/highChartsOption'
  export default {
    data() {
      return {
        text: 'left'
      }
    },
    components: {
      'sv-dashboard': SVDashboard,
      'sv-projectList': SVProjectList,
      'sv-panel': SVPanel
    },
    mounted() {
      Highcharts.setOptions(HighchartsTheme);
      Highcharts.chart('sv_hightCharts_pa', SUMMARY_PORTFOLIO);
      Highcharts.chart('sv_hightCharts_pb', SUMMARY_PORTFOLIO);
      Highcharts.chart('sv_hightCharts_pc', SUMMARY_PORTFOLIO);
    }
  }
</script>

