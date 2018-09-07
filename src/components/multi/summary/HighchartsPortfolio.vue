<template>
  <div class="sv-hightCharts-portfolio">
    <div :id=id></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import { HighchartsTheme } from '@/utils/highChartsTheme';
  import '@/plugins/adjustChartSize';
  export default {
    name: 'sv-hightCharts-portfolio',
    props: {
      id: String,
      options: Array,
      title: String
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
        toThousands(num) {
            if(!num)return '0';
            var info = parseFloat(num).toFixed(2).toString().split('.');
            num=info[0];
            var result = '';
            while (num.length > 3) {
              result = ',' + num.slice(-3) + result;
              num = num.slice(0, num.length - 3);
            }
            if (num) { result = num + result; }
            info[0] = result;
            return info.join('.');
        },
      loadCharts() {
        // 绘制图表
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(this.id, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
              height: '660px',
            }
          },
          title: {
             floating:true,
             text:this.title,
            style:{
              fontSize:'16'
            }
          },
          credits: {
            enabled:false
          },
          legend: {
            enabled: true,
            align: 'center',
            verticalAlign: 'bottom',
            labelFormatter: function () {
                return this.name + '：'+this.percentage.toFixed(1)+'%';
            },
            itemStyle : {
              'fontSize' : '16px'
            },
            itemDistance:20,
            width:300,
            itemWidth:150,
            borderColor: 'none',
            borderWidth:  1,
            adjustChartSize: true,
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
