<template>
  <div class="sv-hightCharts">
    <div :id=id></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import { HighchartsTheme } from '@/utils/highChartsTheme';
  export default {
    name: 'sv-hightCharts',
    props: {
      id: String,
      options: Object
    },
    data() {
      return {

      }
    },
    mounted() {
      this.loadCharts();
    },
    watch: {
      options(val, oldVal){
        this.loadCharts();
      }
    },
    methods: {
      loadCharts() {
        // 绘制图表
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(this.id, this.options);
      }
    }
  }
</script>
