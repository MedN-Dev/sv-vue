export const chartColors = [
    '#df972d', '#21b1e0', '#d93d3c', '#1fa06e', '#da6e1f', '#7a35b4', '#4dad40', '#d14170', '#2e88cd', '#bbc246', '#32aba7', '#d0523c',
    '#515bed', '#e9a91f', '#8f2cff', '#b39536', '#cc2ca3', '#179733', '#c92b2b', '#96d141', '#d77838', '#75abe1', '#e79f04', '#27caa4'
];

export const HighchartsTheme = {
    colors: chartColors,
    chart: {
        backgroundColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 1,
            },
            stops: [
                [0, '#1f212d'],
                [1, '#1f212d'],
            ],
        },
        style: {
            fontFamily: '"Microsoft YaHei", 微软雅黑, 宋体, Verdana, Arial, Helvetica, sans-serif',
            height: '360px',
        },
        plotBorderColor: '#606063',
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '14px',
        },
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
        },
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3',
                fontSize: '12px',
            },
        },
        lineColor: '#232323',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3',
                fontSize: '12px',
            },
        },
        plotBands: {
            color: '#202020'
        }
    },
    yAxis: {
        gridLineColor: '#535353',
        gridLineWidth: 0.5,
        labels: {
            style: {
                color: '#E0E0E3',
                fontSize: '12px',
            },
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#535353',
        tickWidth: 0.5,
        title: {
            enabled: !1,
            style: {
                color: '#A0A0A3',
                fontSize: '16px',
            },
        },
    },
    tooltip: {
        backgroundColor: 'rgba(80, 80, 80, 0.95)',
        style: {
            color: '#F0F0F0',
            fontSize: '12px',
        },
    },
    plotOptions: {
        series: {
            marker: {
                lineColor: '#202020',
                symbol: 'circle',
                radius: 4,
                lineWidth: 0
            },
            lineWidth: 2
        },
        boxplot: {
            fillColor: '505053',
        },
        candlestick: {
            lineColor: 'white',
        },
        errorbar: {
            color: 'white',
        },
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3',
            fontSize: '12px',
            fontWeight: null,
        },
        itemHoverStyle: {
            color: '#FFF',
        },
        itemHiddenStyle: {
            color: '#606063',
        },
        symbolRadius: 0,
        itemMarginTop: 5,
    },
    credits: {
        style: {
            color: '#666',
            fontSize: '12px',
        },
    },
    labels: {
        style: {
            color: '#707073',
            fontSize: '12px',
        },
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3',
        },
        activeDataLabelStyle: {
            color: '#F0F0F3',
        },
    },
    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#47423C',
            },
        },
    },
    rangeSelector: {
        buttonTheme: {
            fill: '#514C44',
            stroke: '#000000',
            style: {
                color: '#CCC',
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white',
                    },
                },
                select: {
                    fill: '#727272',
                    stroke: '#000000',
                    style: {
                        color: 'white',
                    },
                },
            },
        },
        inputBoxBorderColor: '#707073',
        inputStyle: {
            backgroundColor: '#202020',
            color: 'silver',
        },
        labelStyle: {
            color: 'silver',
        },
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA',
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#B7AFA5',
        },
        xAxis: {
            gridLineColor: '#505053',
        },
    },
    scrollbar: {
        barBackgroundColor: '#727272',
        barBorderColor: '#727272',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#514C44',
        trackBorderColor: '#514C44',
    },
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)',
};