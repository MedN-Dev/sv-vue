<template>
  <div class="sv-page-summary">
    <!-- 组件-指标面板 -->
    <sv-dashboard :dashboard="dashboard" view="summary"></sv-dashboard>
    <sv-panel title="発電実績">
      <sv-monthSelect slot="right" :default="start" @listenStart="val=>{this.start=val}" @listenEnd="val=>{this.end=val}"></sv-monthSelect>
      <!-- 组件-发电量图表 -->
      <sv-highCharts-energy id="sv_hightCharts_energy" isSingle :category="category" :start="start" :end="end"></sv-highCharts-energy>
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
      <sv-highCharts-portfolio id="sv_hightCharts_portfolio" :options="portfolio_options"></sv-highCharts-portfolio>
      <!-- 组件-项目列表 -->
      <sv-projectList :category="category"></sv-projectList>
    </sv-panel>
  </div>
</template>

<script>
import SVPanel from '@/components/common/Panel.vue'
import SVDashboard from '@/components/common/Dashboard.vue'
import SVMonthSelect from '@/components/common/MonthSelect.vue'
import SVHighchartsEnergy from '@/components/common/HighchartsEnergy.vue'
import SVHighchartsPortfolio from '@/components/multi/summary/HighchartsPortfolio.vue'
import SVProjectList from '@/components/multi/summary/ProjectList.vue'
import { Portfolio, Widgets } from '@/http/api'
import SVDate from '@/utils/date'
export default {
  name: 'sv-summary',
  props: {
    category: String
  },
  components: {
    'sv-dashboard': SVDashboard,
    'sv-projectList': SVProjectList,
    'sv-panel': SVPanel,
    'sv-highCharts-portfolio': SVHighchartsPortfolio,
    'sv-highCharts-energy': SVHighchartsEnergy,
    'sv-monthSelect': SVMonthSelect
  },
  data() {
    return {
      start: SVDate.getThisMonthDay(),
      end: SVDate.getNextMonthDay(SVDate.getThisMonthDay()),
      dashboard: [],
      trigger: 'COUNT',
      portfolio_sum: [],
      portfolio_count: []
    }
  },
  watch: {
    category() {
      // 刷新页面
      this.fetchPortfolio()
      this.fetchDashboard();
    }
  },
  computed: {
    portfolio_options() {
      if(this.trigger === 'COUNT'){
        return this.portfolio_count;
      }else{
        return this.portfolio_sum;
      }
    }
  },
  mounted(){
    this.fetchPortfolio();
    this.fetchDashboard();
  },
  methods: {
    fetchPortfolio() {
      this.$axios.get(Portfolio.Region,{ id: this.category })
        .then((res)=>{
          if(res.code === 0) {
            this.portfolio_sum = this.filtersPortfolioSum(res.data);
            this.portfolio_count = this.filtersPortfolioCount(res.data);
          }
        })
    },
    filtersPortfolioSum(items) {
      return items.map((item)=>{
        return { name: item.label, y: item.indexValues['1'] }
      });
    },
    filtersPortfolioCount(items) {
      return items.map((item)=>{
        return { name: item.label, y: item.indexValues['2'] }
      });
    },
    fetchDashboard() {
      this.$axios.get(Widgets.Data, {cid: this.category, type: 'summary'})
      .then((res)=>{
        if(res.code === 0){ this.dashboard = this.filterDashboard(res.data); }
      })
    },
    filterDashboard(items) {
      return items.map((item) => {
        return { name: item.label, unit: item.unit, value: item.value };
      })
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