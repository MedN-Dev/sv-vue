<template>
  <div class="sv-page-energy">
    <sv-dashboard :category="category" view="energy"></sv-dashboard>
    <sv-panel title="全体実績">
      <!-- 图表1 -->
      <div id="sv_hightCharts_ea" class="sv-hightCharts"></div>
      <!-- 图表2 -->
      <div id="sv_hightCharts_eb" class="sv-hightCharts"></div>
    </sv-panel>
    <sv-panel title="個別実績">
      <!-- Radio Button -->
      <v-layout row wrap text-xs-center>
        <v-flex xs12 sm6 class="py-2">
          <v-btn-toggle v-model="text">
            <v-btn flat value="left">
              発電量(kWh)
            </v-btn>
            <v-btn flat value="center">
              日射量(kWh/m2)
            </v-btn>
            <v-btn flat value="right">
              売電額(万円)
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
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
  import { ENERGY_A, ENERGY_B } from '@/utils/highChartsOption'
  export default {
    name: 'sv-energy',
    props: {
      category: String, 
    },
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
      Highcharts.chart('sv_hightCharts_ea', ENERGY_A);
      Highcharts.chart('sv_hightCharts_eb', ENERGY_B);
    }
  }
</script>