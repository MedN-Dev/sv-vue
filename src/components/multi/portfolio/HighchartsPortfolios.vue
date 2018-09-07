<template>
  <div class="sv-hightCharts-portfolios">
    <div :id=id></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import '@/plugins/adjustChartSize';
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
        // var chart = null;
        // 绘制图表
        Highcharts.setOptions(HighchartsTheme);

        Highcharts.chart(this.id, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            style: {
            height: '660px',
        },
          },
          title: {
            floating:true,
            text: this.title,
            style:{
              fontSize:'18'
            },
          },
          credits: {
            enabled:false
          },
          legend: {
            enabled: true,
            align: 'center',
            verticalAlign: 'bottom',
            labelFormatter: function () {
              return this.name+'：'+(this.percentage).toFixed(1)+'%';
            },
            layout:'horizontal',
            itemStyle : {
              'fontSize' : '14px'
            },
            itemDistance:20,
            width:300,
            itemWidth:150,
            borderColor:'none',
            borderWidth: 1,
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
            type: 'pie',
            name: 'Brands',
            colorByPoint: true,
            data: this.options
          }]
        }, function(c) {
          // 环形图圆心
          var centerY = c.series[0].center[1];
          // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
          var titleHeight = parseInt(c.title.styles.fontSize);   
          // 设置图表偏移
          c.setTitle({
              y: centerY + titleHeight/2,
          });
        });
      }
    }
  }
</script>
