/**
 * Highcharts plugin for adjustable chart height in response to legend height
 *
 * Author:        Torstein Honsi
 * Version:       1.0.7
 * Last revision: 2016-12-15
 */
    import Highcharts from 'highcharts/highstock';
    Highcharts.wrap(Highcharts.Legend.prototype, 'render', function (proceed) {
      var chart = this.chart,
        translateY,
        addedHeight;
      proceed.call(this);
      if (this.options.adjustChartSize) {
        addedHeight = this.legendHeight;
        if (!chart.originalChartHeight) {
          chart.originalChartHeight = chart.chartHeight;
        }
        if (this.options.align === 'left' || this.options.align === 'right') {
          addedHeight = Math.max(this.group.translateY + this.legendHeight - chart.originalChartHeight, 0);
          // Move the legend down
        } else if (this.options.verticalAlign === 'bottom') {
          translateY = chart.originalChartHeight;
          this.group.attr('translateY', translateY);
          // this.group.alignAttr.translateY = translateY;
          if (this.group.alignAttr) {
            this.group.alignAttr.translateY = translateY;
          }
        }
        if (addedHeight) {
          //   // Adapt chart metrics
          chart.chartHeight = chart.originalChartHeight + addedHeight;
          chart.marginBottom += addedHeight;

          //   // Set the DOM element heights
          chart.container.style.height = chart.chartHeight + 'px';
          chart.renderer.boxWrapper.attr('height', chart.chartHeight); // #7

          var boxedElement = chart.renderer.box.clientWidth ? chart.renderer.box /*IE*/ : chart.renderer.box.parentElement /*FF*/ ;
          var viewBox = "0 0 " + boxedElement.clientWidth + " " + boxedElement.clientHeight;
          chart.renderer.boxWrapper.attr('viewBox', viewBox);
        }
        this.positionCheckboxes();
      }
    })
