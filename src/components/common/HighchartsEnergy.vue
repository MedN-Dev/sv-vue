<template>
  <div class="sv-hightCharts-energy">
    <div :id=id></div>
    <div id='sv_chart_energy_b'></div>
  </div>
</template>
<script>
  import Highcharts from 'highcharts/highstock';
  import { HighchartsTheme } from '@/utils/highChartsTheme';
  import { Energy } from '@/http/api';
  import SVDate from '@/utils/date';
  import SVTools from '@/utils/tools';
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
        totalSun: [], // 图表-2折线图-日射总量
        totalYield: [], // 图表-2折线图-发电总量
        totalYieldEstimation: [], //图表-2折线图-发电总量预测
        storage: null,
        xAxisFormated: [],
        interOn: null
      }
    },
    watch: {
      project() { this.fetchEnergyData(); },
      category() { this.fetchEnergyData(); },
      start() { this.fetchEnergyData(); },
      end() { this.fetchEnergyData(); },
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
        let { sun, sunEstimation, totalSun, totalYield, yieldEstimation, totalYieldEstimation } = data;
        // 获取横坐标
        this.xAxis = sun.map(item => item.dateTime);
        //格式化横坐标
        this.xAxisFormated = [];
        for(let i = 0; i < this.xAxis.length; i++){
          this.xAxisFormated.push(SVDate.timeFormated(String(this.xAxis[i])));
        }
        // 获取数据数组
        this.sun = sun.map(item => item.value);
        this.sunEstimation = sunEstimation.map((item, key) => [key, item.value]);
        this.yield = data['yield'].map(item => item.value);
        this.yieldEstimation = yieldEstimation.map((item, key) => [key, item.value]);
        // 曲线图表
        this.totalSun = totalSun.map(item => item.value);
        this.totalYield = totalYield.map(item => item.value);
        this.totalYieldEstimation = totalYieldEstimation.map(item => item.value);
        //原始数据存入，后期遍历使用
        this.storage = data;
        if(this.xAxisFormated.length <= 10){
          this.interOn = true;
        }
        else{
          this.interOn = false;
        }
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
        this.drawChart(this.id, this.xAxisFormated, SERIES, this.interOn);  
      },
      // 绘制图表， 挂载id, 横轴坐标数组，数据组
      drawChart(ID, XAXIS, SERIES, InterOn) {
        // 实际发电量预测与日射量预测
        const {storage} = this;
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(ID, {
          title: {
            text: '発電実績', 
            style: {    
                fontSize: "16px",   
            }
            },
          subtitle: { text: '', },
          credits: { enabled: false },
          xAxis: {
            categories: XAXIS,
            crosshair: true,
            min: 0,
            max: InterOn? null : 10,
            tickInterval: InterOn? null : 5
          },
          scrollbar: {
            enabled: !InterOn,
          },
          yAxis: [{
            lineWidth: 1,
            title: {
              enabled: 'true',
              text: 'kWh',
              align:'high',
              rotation: 0,
              y: -15,
              offset: 0,
              margin:'10px',
              style:{
                'font-size':'16px',
              }
            },
            labels: {
              style: {
                color: '#fff',
                fontSize:'16px',
                fontFamily:'微软雅黑'
              }
            }
          }, { 
            lineWidth: 1,
            title: {
              enabled: 'true',
              align:'high',
              text: 'kWh/m2',
              rotation: 0,
              y: -15,
              x:0,
              offset: -25,
              style:{
                'font-size':'16px',
              }
            },
            labels: {
              style: {
                color: '#fff',
                fontSize:'16px',
                fontFamily:'微软雅黑'     
              }
            },
            opposite: true,
          }],
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
              var line1=1;
              var line2=1;
              //没有值返回 ‘-’
              var _this = this;
              if(this.points[0].y==0||this.points[0].y==null||this.points[0].y==''){
                 line1=-1;
              }else{
                //针对指定点获取相应的值
                let current_yieldEstimation = storage.yieldEstimation.filter(item =>{
                  if(item.dateTime === parseInt(SVTools.stripAll(_this.points[0].x, '-'))) {
                    return item;
                  }
                });
                var ydPe = (this.points[0].y / current_yieldEstimation[0].value * 100).toFixed()+'%';
              }
              if(this.points[1].y==0||this.points[1].y==null||this.points[1].y==''){
                   line2=-1;
              }else{
                //针对指定点获取相应的值
                let current_sunEstimation = storage.sunEstimation.filter(item =>{ 
                  if(item.dateTime === parseInt(SVTools.stripAll(_this.points[0].x, '-'))) { 
                    return item;
                  }
                });
                var sunPe = (this.points[1].y / current_sunEstimation[0].value * 100).toFixed()+'%';
              }
              var threepoint0 = SVTools.toThousands(this.points[0].y);
              var threepoint1 = SVTools.toThousands(this.points[1].y);
              return `<table style="border:1px solid #FF6D6C;padding:4px;width:100px;background:#2c303b;font-size:14px">
                        <thead style="color:#676C8A">
                          <tr><th>(${this.x})</th><th style="text-align: center">実績</th><th style="text-align: left">予実(%)</th></tr>
                        </thead>
                        <tbody>
                          <tr><td style="color:#FF6D6C;padding-left:8px">発電量(kWh)</td><td style="text-align: center">${threepoint0}</td><td style="text-align: center">${line1>0?ydPe:'-'}</td></tr>
                          <tr><td style="color:#5477E4;padding-left:8px">日射量(kWh/m2)</td><td style="text-align: center">${threepoint1}</td><td style="text-align: center">${line2>0?sunPe:'-'}</td></tr>
                        </tbody>
                      </table>`;
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
            itemWidth:160,
            itemStyle : {
              'fontSize' : '16px'
            }
          },
          series: SERIES,
        });
      },
      //绘制energy总览第二个累计图
      drawChartSecond(ID, XAXIS, SERIES, InterOn) {
        // 实际发电量预测与日射量预测
        Highcharts.setOptions(HighchartsTheme);
        Highcharts.chart(ID, {
          title: {
            text: '累積発電実績',
            style: {    
                fontSize: "16px",   
            }
          },
          subtitle: { text: '', },
          credits: { enabled: false },
          xAxis: {
            categories: XAXIS,
            crosshair: true,
            min:0,
            max: InterOn? null : 10,
            tickInterval: InterOn? null : 5
          },
          scrollbar: {
            enabled: !InterOn,
          },
          yAxis: [{
            lineWidth: 1,
            title: {
              enabled: 'true',
              text: 'kWh',
              align:'high',
              rotation: 0,
              y: -15,
              offset: 0,
              margin:'10px',
              style:{
                'font-size':'16px',
              }
            },
            labels: {
              style: {
                color: '#fff',
                fontSize:'16px',
                fontFamily:'微软雅黑'
              }
            }
          }],
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
              return `<table style="border:1px solid #FF6D6C;padding:4px;width:100px;background:#2c303b;font-size:14px">
                        <thead style="color:#676C8A">
                          <tr><th colspan="3">${XAXIS[0]}至${this.x}</th></tr>
                          <tr><th>&nbsp</th><th style="text-align: center">${this.points[0].series.name}</th><td>&nbsp</td><th style="text-align: left">${this.points[1].series.name}</th></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="color:#2eba87;padding:0 15px 0 8px">発電量(kWh)</td>
                            <td style="text-align: center">${SVTools.toThousands(this.points[0].y)}</td>
                            <td>&nbsp</td>
                            <td style="text-align: center">${SVTools.toThousands(this.points[1].y)}</td>
                          </tr>
                        </tbody>
                      </table>`;
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
            itemWidth:160,
            itemStyle : {
              'fontSize' : '16px'
            }
          },
          series: SERIES,
        });
      },      // 加载第二个图表
      loadNextCharts() {
        let SERIES = [{
            name: '実績',
            type: 'area',
            color:'#5577E4',
            data: this.totalYield,
            marker: {
              enabled: false
            },
            states: {
              hover: {
                lineWidth: 0
              }
            },
            enableMouseTracking: true
          },{
            name: '予実',
            type: 'line',
            color:'#FE6C6E',
            data:  this.totalYieldEstimation,
            marker: {
              enabled: false
            },
            states: {
              hover: {
                lineWidth: 0
              }
            },
            enableMouseTracking: true
          }];
        // 绘制图表
        this.drawChartSecond('sv_chart_energy_b', this.xAxisFormated, SERIES, this.interOn);  
      }
    }
  }
</script>
