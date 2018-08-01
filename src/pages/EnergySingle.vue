<template>
  <div class="sv-page-energySingle">
    <sv-dashboard></sv-dashboard>
    <sv-panel title="予実Graph">
      <!-- 图表1 -->
      <div id="sv_hightCharts_sea" class="sv-hightCharts"></div>
      <!-- 图表2 -->
      <div id="sv_hightCharts_seb" class="sv-hightCharts"></div>
    </sv-panel>
    <sv-panel title="予実比較表">
      <sv-dataTable></sv-dataTable>
    </sv-panel>
    <sv-panel title="月次推移">
      <sv-dataTable></sv-dataTable>
    </sv-panel>
  </div>
</template>

<script>
  import SVPanel from '@/components/common/Panel.vue'
  import SVDashboard from '@/components/common/Dashboard.vue'
  import SVDataTable from '@/components/common/DataTable.vue'
  import Highcharts from 'highcharts'
  import { HighchartsTheme } from '@/utils/highChartsTheme'
  import { SINGLE_ENERGY_A, SINGLE_ENERGY_B } from '@/utils/highChartsOption'
  export default {
    data() {
      return {

      }
    },
    components: {
      'sv-dashboard': SVDashboard,
      'sv-panel': SVPanel,
      'sv-dataTable': SVDataTable
    },
    mounted() {
      Highcharts.setOptions(HighchartsTheme);
      Highcharts.chart('sv_hightCharts_sea', SINGLE_ENERGY_A);
      Highcharts.chart('sv_hightCharts_seb', SINGLE_ENERGY_B);
    }
  }
</script>
<style>

</style>