<template>
  <div class="sv-hightCharts-portfolios">
    <div :id=id></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import { HighchartsTheme } from '@/utils/highChartsTheme';
  export default {
    name: 'sv-hightCharts-portfolios',
    props: {
      id: String,
      title: String,
      options: Array
    },
    data() {
      return {
        active: ''
      }
    },
    mounted() {
      this.loadCharts();
    },
    watch: {
      options(){
        this.loadCharts();
      }
    },
    methods: {
      // 点击图表
      activeChart(name) {
        this.active = name;
        this.$emit("listenActiveChart", name);
      },
      loadCharts() {
        var That = this;
        // 绘制图表
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(this.id, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
          },
          title: {
            text: this.title,
            align: 'center',
            verticalAlign: 'middle',
            y:-30,
            x:0,
            style: {
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: "24px"
            }
          },
          credits: {
            enabled:false
          },
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            labelFormatter: function () {
              return this.name ;
            }
          },
          tooltip: {
            pointFormatter: function(){
              return this.name+':'+(this.percentage).toFixed(2)+'%';
            }
          },
          plotOptions: {
            pie: {
              innerSize: '60%',
              allowPointSelect: false,
              cursor: 'pointer',
              events: { 
                click: function(e) { 
                  That.activeChart(e.point.name);
                } 
              },
              dataLabels: {
                enabled: false	 
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: this.options
          }]
        });
      }
    }
  }
</script>
