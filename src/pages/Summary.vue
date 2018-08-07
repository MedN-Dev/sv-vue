<template>
  <div class="sv-page-summary">
    <!-- 组件-指标面板 -->
    <sv-dashboard :category="category" view="summary"></sv-dashboard>
    <sv-panel title="発電実績">
      <!-- 组件-图表1 -->
      <sv-highCharts id="sv_hightCharts_se" :options=chart_se_options></sv-highCharts>
    </sv-panel>
    <sv-panel title="Portfolio">
      <!-- 组件-RadioButton -->
      <v-layout row wrap text-xs-center>
        <v-flex xs12 sm6 class="py-2">
          <v-btn-toggle v-model="trigger" mandatory>
            <v-btn flat value="COUNT">
              発電所数(箇所)
            </v-btn>
            <v-btn flat value="SUM">
              パネル出力(MW)
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
      <!-- 组件-Portfolio图表 -->
      <sv-highCharts-portfolio id="sv_hightCharts_sp" :options="chart_sp_options"></sv-highCharts-portfolio>
      <!-- 组件-项目列表 -->
      <sv-projectList :category="category"></sv-projectList>
    </sv-panel>
  </div>
</template>

<script>
import SVPanel from '@/components/common/Panel.vue'
import SVDashboard from '@/components/common/Dashboard.vue'
import SVProjectList from '@/components/common/ProjectList.vue'
import SVHighcharts from '@/components/common/Highcharts.vue'
import SVHighchartsPortfolio from '@/components/common/HighchartsPortfolio.vue'
import { SUMMARY_PORTFOLIO, SUMMARY_ENERGY } from '@/utils/highChartsOption'
import { Portfolio } from '@/http/api'

export default {
  name: 'sv-summary',
  props: {
    category: String
  },
  components: {
    'sv-dashboard': SVDashboard,
    'sv-projectList': SVProjectList,
    'sv-panel': SVPanel,
    'sv-highCharts': SVHighcharts,
    'sv-highCharts-portfolio': SVHighchartsPortfolio
  },
  data() {
    return {
      trigger: 'COUNT',
      chart_se_options: SUMMARY_ENERGY,
      chart_portfolio_sum_data: [],
      chart_portfolio_count_data: []
    }
  },
  watch: {
    category() {
      // 刷新页面
      this.loadPortfolio()
    }
  },
  computed: {
    chart_sp_options() {
      if(this.trigger === 'COUNT'){
        return this.chart_portfolio_count_data;
      }else{
        return this.chart_portfolio_sum_data;
      }
    }
  },
  mounted(){
    this.loadPortfolio();
  },
  methods: {
    loadPortfolio() {
      this.$axios.get(Portfolio.Region,{ id: this.category })
        .then((res)=>{
          this.chart_portfolio_sum_data = this.filtersPortfolioSum(res.data);
          this.chart_portfolio_count_data = this.filtersPortfolioCount(res.data);
        })
    },
    filtersPortfolioSum(items) {
      return items.map((item)=>{
        return { name: item.label, y: item.value.sum }
      });
    },
    filtersPortfolioCount(items) {
      return items.map((item)=>{
        return { name: item.label, y: item.value.count }
      });
    }
  }
}
</script>

<style>
.sv-page-summary{
  display: inline;
  text-align: center;
}
.theme--dark .v-btn-toggle{
  background: transparent;
}
</style>