<template>
  <div class="sv-hightCharts-energy">
    <div :id=id></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import { HighchartsTheme } from '@/utils/highChartsTheme';
  import { Energy } from '@/http/api'
  export default {
    name: 'sv-hightCharts-energy',
    props: ['id', 'project', 'category', 'start', 'end'],
    data() {
      return {
        options: {},
        xAxis: [], // 天数
        sun: [], // 日射量
        sunEstimation: [], // 日射量预测
        yield: [], //発電量実績
        yieldEstimation: [], //発電量予測
        totalSun: [], // 曲线图
        totalYield: [], // 曲线图
      }
    },
    watch: {
      project() { this.fetchEnergyData(); },
      category() { this.fetchEnergyData(); },
      start() { this.fetchEnergyData(); },
    },
    mounted() {
      this.fetchEnergyData();
    },
    methods: {
      // 请求数据
      fetchEnergyData() {
        this.$axios.get(Energy.Data, { pid: this.project, cid: this.category, start: this.start, end: this.end})
          .then((res)=>{
            if(res.code === 0) {
              // 清洗数据源
              this.filterEnergyData(res.data);
              // 加载列表
              this.loadCharts();
            }
          })
      },
      // 清洗数据源
      filterEnergyData(data) {
        let { sun, sunEstimation, totalSun, totalYield, yieldEstimation } = data;
        // 获取横坐标
        this.xAxis = sun.map(item => item.dateTime);
        // 获取数据数组
        this.sun = sun.map(item => item.value);
        this.sunEstimation = sunEstimation.map(item => item.value);
        this.yield = data['yield'].map(item => item.value);
        this.yieldEstimation = yieldEstimation.map(item => item.value);
        // 曲线图表
        this.totalSun = totalSun.map(item => item.value);
        this.totalYield = totalYield.map(item => item.value);
      },
      // 配置变量
      loadCharts() {
        let SERIES = [{
            name: '発電量実績',
            type: 'column',
            color:'#FE6C6E',
            data: this.yield,
          }, {
            name: '日射量実績',
            type: 'column',
            color:'#5577E4',
            data: this.sun,
          },{
            name: '発電量予測',
            type: 'line',
            color:'#FE6C6E',
            data: [[0,200],[11,200]],
            marker: {
              enabled: false
            },
            states: {
              hover: {
                lineWidth: 0
              }
            },
            enableMouseTracking: false
          },{
            name: '日射量予測',
            type: 'line',
            color:'#5577E4',
            data: [[0,150],[11,150]],
            marker: {
              enabled: false
            },
            states: {
              hover: {
                lineWidth: 0
              }
            },
            enableMouseTracking: false
          }];
        // 绘制图表
        this.drawChart(this.id, this.xAxis, SERIES);  
      },
      /**
       * 绘制图表， 挂载id, 横轴坐标数组，数据组
       */
      drawChart(ID, XAXIS, SERIES) {
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(ID, {
          title: { text: '', },
          subtitle: { text: '', },
          credits: { enabled:false },
          xAxis: {
            categories: XAXIS,
            crosshair: true,
          },
          yAxis: {
            gridLineWidth:'0px', 
            lineWidth: 1,
          min: 0,
            title: {
                text: '发电量 (KWH)',
            } 
          },
          tooltip: {
            borderColor:null,
            borderWidth: 0,
            borderRadius: 0,
            shadow:false,
            backgroundColor:'transparent', 
            shared: true,
            useHTML: true,
            valueDecimals: 2,
            formatter: function () {
              return '<table style="border:1px solid #FF6D6C;text-align:center;padding:4px;width:100px"><thead style="color:#676C8A"><tr><th>'+this.x+'日</th><th>発電量</th><th>日射量</th></tr></thead>' +
              '<tr><td style="color:#FF6D6C;text-align: right">実績: </td><td>'+this.points[0].y+'kWh</td><td >'+this.points[1].y+'kWh/m2</td></tr>'+
              '<tr><td style="color:#5477E4;text-align: right">比較: </td><td>'+70+'%</td><td style="text-align: right">'+60+'%</td></tr>'+
              '</table>';
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0,
            },
          },
          legend:{
            align:'center',
            itemWidth:160
          },
          series: SERIES,
        });
      }
    }
  }
</script>
