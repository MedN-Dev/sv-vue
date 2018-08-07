// 图表数据源
export const SUMMARY_ENERGY = {
    title: {
        text: '',
    },
    subtitle: {
        text: '',
    },
    credits: {
        enabled:false
    },
    xAxis: {
        categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ],
        crosshair: true,
    },
    yAxis: {
        gridLineWidth:'0px', 
        lineWidth: 1,
		min: 0,
        title: {
            text: '发电量 (KWH)',
        },
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
           // console.log(this);
            return '<table style="border:1px solid #FF6D6C;text-align:center;padding:4px;width:100px"><thead style="color:#676C8A"><tr><th>'+this.x+'日</th><th>発電量</th><th>日射量</th></tr></thead>' +
            '<tr><td style="color:#FF6D6C;text-align: right">実績: </td><td>'+this.points[0].y+'kWh</td><td >'+this.points[1].y+'kWh/m2</td></tr>'+
            '<tr><td style="color:#5477E4;text-align: right">比較: </td><td>'+this.points[0].series.name+'</td><td style="text-align: right">'+this.points[1].series.name+'</td></tr>'+
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
    series: [{
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
    },{
        name: '日射量予測',
        type: 'line',
        color:'#5577E4',
        data: [[0,150],[11,150]],
        marker: {
			enabled: false
		},
    }],
};

// 图表数据源-已对接
export const SUMMARY_PORTFOLIO = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    credits: {
        enabled:false
    },
    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        labelFormatter: function () {
            return this.name + ':'+this.percentage.toFixed(2)+'%';
        }
    },
    tooltip: {
        pointFormatter: function(){
            return this.name+':'+(this.percentage).toFixed(2)+'%';
        }
    },
    plotOptions: {
        pie: {
            innerSize: '40%',
            allowPointSelect: true,
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
        data: [{
            name: '东北',
            y: 25,
        }, {
            name: '中部',
            y: 11
        }, {
            name: '九州',
            y: 10
        }, {
            name: '四国',
            y: 4
        }, {
            name: '本州',
            y: 4
        }, {
            name: '琉球',
            y: 7
        }]
    }]
};

// 图表数据源
export const ENERGY_A = {
    title: {
        text: '',
    },
    subtitle: {
        text: '',
    },
    credits: {
        enabled:false
    },
    xAxis: {
        categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ],
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
            return '<table style="border:1px solid #FF6D6C;text-align:center;padding:4px;width:100px"><thead style="color:#676C8A"><tr><th>'+this.x+'日</th><th>发电量</th><th>日射量</th></tr></thead>' +
            '<tr><td style="color:#FF6D6C">实际: </td><td style="text-align: right">'+this.points[0].y+'kWh</td><td style="text-align: right">'+this.points[1].y+'kWh/m2</td></tr>'+
            '<tr><td style="color:#5477E4">比较: </td><td style="text-align: right">'+this.y+'kWh</td><td style="text-align: right">'+this.y+'kWh/m2</td></tr>'+
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
    series: [{
        name: '日射量実績',
        type: 'column',
       
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,],

    }, {
        name: '发电量実績',
        type: 'column',
        
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3,],

    },{
        name: '发电量预测',
        type: 'line',
        color:'#5577E4',
     
        data: [[0,100],[11,100]],
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
        name: '日射量预测',
        type: 'line',
       
        color:'#FE6C6E',
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
    }],
}

// 图表数据源
export const ENERGY_B = {
    chart: {
		zoomType: 'xy'
	},
    title: {
        text: '发电量实际累计(kWh)',
       
    },
    subtitle: {
        text: '',
    },
    credits: {
        enabled:false
    },
    xAxis: {
        categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ],
        crosshair: true,
    },
    yAxis: {
        gridLineWidth:'0px',
       lineWidth: 1,
       min: 0,
       title: {
           text: '发电量 (kWh)',
           align: 'high',
           offset: 0,
           rotation: 0,
           y: -20,
           x: 20
       }
   },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
    },
    series: [{
        name: '発電量実績',
        type: 'column',
     
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,],
        tooltip:{
            enabled:false
        }

    }, {
        name: '日射量実績',
        type: 'column',
        
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3,],
        tooltip:{
            enabled:false
        }

    },{
        name: '预测',
        type: 'line',
        color:'#E6A508',
        data: [30,60,90,120,150,180,210,240,270,300,330,360],
         
    },{
        name: '实际',
        type: 'line',
        color:'#984448',
        data: [20,40,60,80,100,120,140,160,180,200,220,240],
      
    }],
}

// 图表数据源
export const PORTFOLIO_A = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
    },
    title: {
        text: '地域',
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
            allowPointSelect: true,
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
        data: [{
            name: '东北',
            y: 61,
        }, {
            name: '中部',
            y: 11
        }, {
            name: '九州',
            y: 10
        }, {
            name: '四国',
            y: 20
        }]
    }]
}

// 图表数据源
export const PORTFOLIO_B = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
    },
    title: {
        text: 'FIT',
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
            allowPointSelect: true,
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
        data: [{
            name: '24门',
            y: 24,
        }, {
            name: '36门',
            y: 36
        }, {
            name: '22门',
            y: 10
        }, {
            name: '0门',
            y: 20
        }]
    }]
}

// 图表数据源
export const PORTFOLIO_C = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
    },
    title: {
        text: '建筑年数',
        align: 'center',
        verticalAlign: 'middle',
        y:-40,
        x:0,
        style: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: "18px"
        }
    },
    credits: {
        enabled:false
    },
    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        labelFormatter: function () {
            return this.name;
        }
    },
    tooltip: {
        pointFormatter: function(){
            return this.name;
        }
    },
    plotOptions: {
        pie: {
            innerSize: '60%',
            allowPointSelect: true,
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
        data: [{
            name: '5年未满',
            y: 61,
        }, {
            name: '5年以上10年未满',
            y: 11
        }, {
            name: '10年以上15年未满',
            y: 10
        }, {
            name: '15年以上',
            y: 20
        }]
    }]
}

// 单项目----------------------------

// 图表数据源-singleEnergy
export const SINGLE_ENERGY_A = {
    title: {
        text: '',
    },
    subtitle: {
        text: '',
    },
    credits: {
        enabled:false
    },
    xAxis: {
        categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ],
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
    series: [{
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
    }],
}

// 图表数据源-singleEnergy
export const SINGLE_ENERGY_B = {
    title: {
        text: '发电量实际累计(kWh)',
       
    },
    subtitle: {
        text: '',
    },
    credits: {
        enabled:false
    },
    xAxis: {
        categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ],
        crosshair: true,
    },
    yAxis: {
        gridLineWidth:'0px',
       lineWidth: 1,
       min: 0,
       title: {
           text: '发电量 (kWh)',
           align: 'high',
           offset: 0,
           rotation: 0,
           y: -20,
           x: 20
       }
   },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        }
    },
    series: [{
        name: '発電量実績',
        type: 'column',
        color:'#2EBA87',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,],
    }, {
        name: '日射量実績',
        type: 'column',
        color:'#5478E5',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3,],
       
    },{
        name: '预测',
        type: 'line',
        color:'#E6A508',
        tooltip:{
            shared: true,
            formatter: function () {
                return '预测:<b>' + this.y + 'kWh</b>';
            }
        }, 
        data: [30,60,90,120,150,180,210,240,270,300,330,360],
         
    },{
        name: '实际',
        type: 'line',
        color:'#984448',
        tooltip:{
            shared: true,
            formatter: function () {
                return '预测:<b>' + this.y + 'kWh</b>';
            }
        },
        data: [20,40,60,80,100,120,140,160,180,200,220,240],
      
    }],
}


