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
        min: 0,
        title: {
            text: '发电量 (KWH)',
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:8px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
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
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: '中部',
            y: 11.84
        }, {
            name: '九州',
            y: 10.85
        }, {
            name: '四国',
            y: 4.67
        }, {
            name: '本州',
            y: 4.18
        }, {
            name: '琉球',
            y: 7.05
        }]
    }]
};

