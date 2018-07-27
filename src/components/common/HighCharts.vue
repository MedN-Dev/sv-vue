<template>
    <div id="sv_hightCharts" class="sv-hightCharts"></div>
</template>

<script>
    import Highcharts from 'highcharts'
    import { SUMMARY_ENERGY } from '@/utils/highChartsOption'
    import { HighchartsTheme } from '@/utils/highChartsTheme'
    export default {
        data() {
            return {

            }
        },
        mounted() {
            Highcharts.setOptions(HighchartsTheme)
            Highcharts.chart('sv_hightCharts', SUMMARY_ENERGY);
        }
    }
</script>