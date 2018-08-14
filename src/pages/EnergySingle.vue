<template>
  <div class="sv-page-energySingle">
    <sv-dashboard :dashboard="dashboard"></sv-dashboard>
    <sv-panel title="予実Graph">
      <!-- 图表1 -->
      <div id="sv_hightCharts_sea" class="sv-hightCharts"></div>
      <!-- 图表2 -->
      <div id="sv_hightCharts_seb" class="sv-hightCharts"></div>
    </sv-panel>
    <sv-panel title="予実比較表">
      <sv-dataTable :bodys="compare_bodys"></sv-dataTable>
    </sv-panel>
    <sv-panel title="月次推移">
      <sv-dataTable :headers="month_headers" :bodys="month_bodys"></sv-dataTable>
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
  import { Widgets, Energy } from '@/http/api'
  export default {
    name: 'sv-energySignle',
    props: ['id'],
    data() {
      return {
        start: '2018-8-1',
        end: '',
        dashboard: [],
        compare_headers: [],
        compare_bodys: [],
        month_headers: [],
        month_bodys: [],
      }
    },
    components: {
      'sv-dashboard': SVDashboard,
      'sv-panel': SVPanel,
      'sv-dataTable': SVDataTable
    },
    mounted() {
      this.fetchDashboard();
      this.fetchDataTable();
      Highcharts.setOptions(HighchartsTheme);
      Highcharts.chart('sv_hightCharts_sea', SINGLE_ENERGY_A);
      Highcharts.chart('sv_hightCharts_seb', SINGLE_ENERGY_B);
    },
    methods: {
      // 获取面板指标
      fetchDashboard() {
        this.$axios.get(Widgets.Data, {pid: this.id, type: 'energy'})
          .then((res)=>{
            if(res.code === 0) { this.dashboard = this.filterDashboard(res.data); }
          })
      },
      // 清洗面板数据源
      filterDashboard(items) {
        return items.map((item) => {
          return { name: item.label, unit: item.unit, value: item.value };
        })
      },
      // 获取表格
      fetchDataTable() {
        this.$axios.get(Energy.Tables, { pid: this.id, start: this.start, end: this.end })
          .then((res) => {
            if(res.code === 0) {
              // 发电比较
              this.compare_bodys = this.filterBodys(res.data.compare.filter((item)=>{ return item.code != 'Header' }))
              // 月此报告
              this.month_headers = this.filterHeaders(res.data.month[0].values);
              this.month_bodys = this.filterBodys(res.data.month.filter((item)=>{ return item.code != 'Header' }))
            }
          })
      },
      // 清洗表头
      filterHeaders(items) {
        let header = [{ text: '', value: 'xxx', sortable: false, align: 'left'}];
        return header.concat(items.map((item, index) => {
          return { text: item, value: index, sortable: false, align: 'right'};
        }));
      },
      // 清洗表体
      filterBodys(items) {
        return items.map((item) => {
          return { title: item.label, col1: item.indexValues['1'], col2: item.indexValues['2'], col3: item.indexValues['3'] };
        })
      }
    }
  }
</script>
<style>

</style>