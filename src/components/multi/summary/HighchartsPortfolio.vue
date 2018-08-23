<template>
  <div class="sv-hightCharts-portfolio">
    <div :id=id></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import { HighchartsTheme } from '@/utils/highChartsTheme';
  export default {
    name: 'sv-hightCharts-portfolio',
    props: {
      id: String,
      options: Array
    },
    data() {
      return {

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
      loadCharts() {
        // 绘制图表
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(this.id, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
             floating:true,
             text:'',
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
                return this.name + '：'+this.percentage.toFixed(1)+'%';
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
		// 环形图圆心
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
