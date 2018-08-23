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
        active: true
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
        this.active? this.$emit("listenActiveChart", name) : this.$emit("listenActiveChart", '');
        this.active = !this.active;
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
            floating:true,
            text: this.title,
            style:{
              fontSize:'20'
            }
          },
          credits: {
            enabled:false
          },
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            labelFormatter: function () {
              return this.name+'：'+(this.percentage).toFixed(1)+'%';
            }
          },
          tooltip: {
            pointFormatter: function(){
              return this.name+'：'+this.y;
            }
          },
          plotOptions: {
            pie: {
              innerSize: '60%',
              allowPointSelect: false,
              cursor: 'pointer',
              events: { 
                click: function(e) { 
                  That.activeChart(e.point.code);
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
        }, function(c) {
            var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
            c.setTitle({
              y:centerY + titleHeight/2
            });
        });
      }
    }
  }
</script>
