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
        sun: [],
        sunEstimation: [],
        totalSun: [],
        totalYield: [],
        yield: [],
        yieldEstimation: []
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
              this.options = this.filterEnergyData(res.data);
              // 加载列表
              this.loadCharts();
            }
          })
      },
      // 清洗数据源
      filterEnergyData(data) {
        // 拆分数据组装 => 
        return data;
      },
      // 更新图表
      loadCharts() {
        // 变量
        const MONTH = ['1','2','3','4','5','6','7','8','9','10','11','12',];
        const SERIES = [{
            name: '発電量実績',
            type: 'column',
            color:'#FE6C6E',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 116.4, 194.1, 95.6, 54.4,],
          }, {
            name: '日射量実績',
            type: 'column',
            color:'#5577E4',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3,],
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
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(this.id, {
          title: { text: '', },
          subtitle: { text: '', },
          credits: { enabled:false },
          xAxis: {
            categories: MONTH,
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
