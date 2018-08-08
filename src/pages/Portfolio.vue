<template>
  <div class="sv-page-profolio">
    <sv-dashboard :category="category" view="profolio"></sv-dashboard>
    <sv-panel title="Portfolio">
      <!-- Radio Button -->
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
      <sv-highCharts-portfolios id="sv_hightCharts_portfolios_region" title="地域" :options="region_options"></sv-highCharts-portfolios>
      <!-- 组件-Portfolio图表 -->
      <sv-highCharts-portfolios id="sv_hightCharts_portfolios_fit" title="Fit" :options="fit_options"></sv-highCharts-portfolios>
      <!-- 组件-Portfolio图表 -->
      <sv-highCharts-portfolios id="sv_hightCharts_portfolios_codYears" title="年限" :options="codYears_options"></sv-highCharts-portfolios>
      <!-- 项目列表 -->
      <sv-projectList-portfolio :category="category" :region="region" :fit="fit" :codYears="codYears"></sv-projectList-portfolio>
    </sv-panel>
  </div>
</template>

<script>
  import SVPanel from '@/components/common/Panel.vue'
  import SVDashboard from '@/components/common/Dashboard.vue'
  import SVProjectListPortfolio from '@/components/multi/portfolio/ProjectListPortfolio.vue'
  import SVHighchartsPortfolios from '@/components/multi/portfolio/HighchartsPortfolios.vue'
  import { Portfolio } from '@/http/api'
  export default {
    name: 'sv-portfolio',
    props: {
      category: String
    },
    components: {
      'sv-dashboard': SVDashboard,
      'sv-panel': SVPanel,
      'sv-projectList-portfolio': SVProjectListPortfolio,
      'sv-highCharts-portfolios': SVHighchartsPortfolios
    },
    data() {
      return {
        trigger: 'COUNT',
        region: '',
        fit: '',
        codYears: '',
        region_sum: [],
        region_count: [],
        fit_sum: [],
        fit_count: [],
        codYears_sum: [],
        codYears_count: []
      }
    },
    computed: {
      region_options() {
        return this.trigger === 'COUNT' ? this.region_count : this.region_sum;
      },
      fit_options() {
        return this.trigger === 'COUNT' ? this.fit_count : this.fit_sum;
      },
      codYears_options() {
        return this.trigger === 'COUNT' ? this.codYears_count : this.codYears_sum;
      }
    },
    watch: {
      category() {
        // 刷新页面
        this.loadPortfolio()
      }
    },
    mounted() {
      this.loadPortfolio();
    },
    methods: {
      loadPortfolio() {
        this.$axios.get(Portfolio.Charts,{ id: this.category, region: this.region, fit: this.fit, codYears: this.codYears })
          .then((res)=>{
            this.region_count = this.filtersPortfolioSum(res.data.region);
            this.region_sum = this.filtersPortfolioCount(res.data.region);
            this.fit_count = this.filtersPortfolioSum(res.data.fit);
            this.fit_sum = this.filtersPortfolioCount(res.data.fit);
            this.codYears_count = this.filtersPortfolioSum(res.data.codYears);
            this.codYears_sum = this.filtersPortfolioCount(res.data.codYears);
          })
      },
      filtersPortfolioSum(items) {
        return items.map((item)=>{
          return { name: item.label, y: item.values[0] }
        });
      },
      filtersPortfolioCount(items) {
        return items.map((item)=>{
          return { name: item.label, y: item.values[1] }
        });
      }
    }
  }
</script>

