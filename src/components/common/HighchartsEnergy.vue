<template>
  <div class="sv-hightCharts-energy">
    <div :id=id></div>
    <div id='sv_chart_energy_b'></div>
  </div>
</template>
<script>
  import Highcharts from 'highcharts/highstock';
  import { HighchartsTheme } from '@/utils/highChartsTheme';
  import { Energy } from '@/http/api'
  export default {
    name: 'sv-hightCharts-energy',
    props: ['isSingle','id', 'project', 'category', 'start', 'end'],
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
              // 只渲染一个图表
              if(!this.isSingle){ this.loadNextCharts(); }
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
        this.sunEstimation = [[0, sunEstimation[0].value], [this.xAxis.length, sunEstimation[0].value]];
        this.yield = data['yield'].map(item => item.value);
        this.yieldEstimation = [[0, yieldEstimation[0].value], [this.xAxis.length, yieldEstimation[0].value]];
        // 曲线图表
        this.totalSun = totalSun.map(item => item.value);
        this.totalYield = totalYield.map(item => item.value);
      },
      // 配置变量
      loadCharts() {
        let SERIES = [{
            yAxis: 0,
            name: '発電量実績',
            type: 'column',
            color:'#FE6C6E',
            data: this.yield,
          },{
            yAxis: 1,
            name: '日射量実績',
            type: 'column',
            color:'#5577E4',
            data: this.sun,
          },{
              yAxis: 0,
            name: '発電量予測',
            type: 'line',
            color:'#FE6C6E',
            data: this.yieldEstimation,
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
             yAxis: 1,
            name: '日射量予測',
            type: 'line',
            color:'#5577E4',
            data:  this.sunEstimation,
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
      // 绘制图表， 挂载id, 横轴坐标数组，数据组
      drawChart(ID, XAXIS, SERIES) {
        let sunEstimation = this.sunEstimation;
        let yieldEstimation = this.yieldEstimation;
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(ID, {
          title: { text: '発電実績', },
          subtitle: { text: '', },
          credits: { enabled:false },
          xAxis: {
            categories: XAXIS,
            crosshair: true,
            min:0,
            max:10,
            
          },
          scrollbar: {
            enabled: true,
          },
          yAxis: [ 
              {
              lineWidth: 1,
              title: {
                 enabled: 'true',
                text: 'KWh',
                align:'high',
                 rotation: 0,
                y: -15,
                 offset: 0,
                  margin:'10px',
                  style:{
                    'font-size':'14px',
                    
                  }
		        	}
            },
            { 
              lineWidth: 1,
              title: {
                enabled: 'true',
                align:'high',
                  text: 'KWh/m2',
                rotation: 0,
                y: -15,
                x:0,
                offset: -25,
			          style:{
                    'font-size':'14px',
                  }
			      } ,
              opposite: true,
            }
          ],
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
              var day = this.x;
              var yd = this.points[0].y;
              var sun = this.points[1].y;
              var sunEs = sunEstimation[0][1];
              var yieldEs = yieldEstimation[0][1];
              var ydPe = yd / yieldEs * 100;
              var sunPe = sun/ sunEs * 100;
              return '<table style="border:1px solid #FF6D6C;text-align:center;padding:4px;width:100px;background:white"><thead style="color:#676C8A"><tr><th>'+this.x+'日</th><th>発電量</th><th>日射量</th></tr></thead>' +
              '<tr><td style="color:#FF6D6C;text-align: right">実績: </td><td style="color:#676C8A">'+this.points[0].y+'kWh</td><td style="color:#676C8A">'+this.points[1].y+'kWh/m2</td></tr>'+
              '<tr><td style="color:#5477E4;text-align: right">比較: </td><td style="color:#676C8A">'+ydPe.toFixed()+'%</td><td style="text-align: right;color:#676C8A">'+sunPe.toFixed()+'%</td></tr>'+
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
      },
      // 加载第二个图表
      loadNextCharts() {
        let SERIES = [{
            yAxis: 1,
            name: '发电总量',
            type: 'line',
            color:'#FE6C6E',
            data: this.totalYield,
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
            name: '日射量总量',
            type: 'line',
            color:'#5577E4',
            data:  this.totalSun,
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
        this.drawChart('sv_chart_energy_b', this.xAxis, SERIES);  
      }
    }
  }
</script>
