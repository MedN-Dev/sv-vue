// 图表数据源
export const SUMMARY_ENERGY = {
    chart: {
        type: 'column',
    },
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
        headerFormat: '<table style="border:1px solid {series.color};text-align:center;padding:4px"><thead><tr><th>{point.x}日</th><th>发电量</th><th>日射量</th></tr></thead>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td><td style="text-align: right">{point.y}KWH</td><td style="text-align: right">{point.y}KWH/M2</td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
    },
    series: [{
        name: '発電量実績',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,],

    }, {
        name: '日射量実績',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3,],

    },],
};

// 图表数据源
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
            sliced: true,
            selected: true
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

}

// 图表数据源
export const ENERGY_B = {
    
}

// 图表数据源
export const PORTFOLIO_A = {

}

// 图表数据源
export const PORTFOLIO_B = {

}

// 图表数据源
export const PORTFOLIO_C = {

}