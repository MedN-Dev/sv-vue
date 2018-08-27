<template>
  <div class="sv-page-profolio">
    <sv-dashboard :dashboard="dashboard"></sv-dashboard>
    <sv-googleMaps :items="items"></sv-googleMaps>
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
      <sv-highCharts-portfolios id="sv_hightCharts_portfolios_region" title="地域" :options="region_options" @listenActiveChart="changeRegion"></sv-highCharts-portfolios>
      <!-- 组件-Portfolio图表 -->
      <sv-highCharts-portfolios id="sv_hightCharts_portfolios_fit" title="FIT" :options="fit_options" @listenActiveChart="changeFit"></sv-highCharts-portfolios>
      <!-- 组件-Portfolio图表 -->
      <sv-highCharts-portfolios id="sv_hightCharts_portfolios_codYears" title="建筑年限" :options="codYears_options" @listenActiveChart="changeCodYears"></sv-highCharts-portfolios>
       <!-- 组件-Portfolio图表 -->
      <sv-highCharts-portfolios id="sv_hightCharts_portfolios_panelMaker" title="製紙メーカー" :options="panel_options" @listenActiveChart="changePanel"></sv-highCharts-portfolios>
      <!-- 项目列表 -->
      <sv-projectList-portfolio :category="category" :region="region" :fit="fit" :codYears="codYears"></sv-projectList-portfolio>
    </sv-panel>
  </div>
</template>
<script>
  import SVPanel from '@/components/common/Panel.vue'
  import SVDashboard from '@/components/common/Dashboard.vue'
  import SVGoogleMap from '@/components/multi/portfolio/GoogleMaps.vue'
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
      'sv-highCharts-portfolios': SVHighchartsPortfolios,
      'sv-googleMaps':SVGoogleMap
    },
    data() {
      return {
        dashboard: [],
        trigger: 'COUNT',
        region: '',
        fit: '',
        codYears: '',
        panelMaker:'',
        region_sum: [],
        region_count: [],
        fit_sum: [],
        fit_count: [],
        codYears_sum: [],
        codYears_count: [],
        panelMaker_sum:[],
        panelMaker_count:[],
        items: []
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
      },
      panel_options() {
        return this.trigger === 'COUNT' ? this.panelMaker_count : this.panelMaker_sum;
      }
    },
    watch: {
      category() { this.resetChart(); this.loadPortfolio(); },
      region() { this.loadPortfolio() },
      fit() { this.loadPortfolio() },
      codYears() { this.loadPortfolio() },
      panelMaker() { this.loadPortfolio() },
    },
    mounted() {
      this.loadPortfolio();
    },
    methods: {
      loadPortfolio() { this.fetchPortfolio(); this.fetchDashboard(); this.fetchLatAndLng();},
      resetChart() { this.region = ''; this.fit = ''; this.codYears = '';this.panelMaker=''; },
      changeRegion(value) { this.region = value; },
      changeFit(value) { this.fit = value; },
      changeCodYears(value) { this.codYears = value; },
      changePanel(value){this.panelMaker=value;},
      /**
       * 获取图表
       */
      fetchPortfolio() {
        this.$axios.get(Portfolio.Charts,{ id: this.category, region: this.region, fit: this.fit, codYears: this.codYears })
          .then((res)=>{
            if(res.code === 0){
              //地域
              this.region_count = this.filtersPortfolioSum(res.data.region);
              this.region_sum = this.filtersPortfolioCount(res.data.region);
              //FIT
              this.fit_count = this.filtersPortfolioSum(res.data.fit);
              this.fit_sum = this.filtersPortfolioCount(res.data.fit);
              //建筑年限
              this.codYears_count = this.filtersPortfolioSum(res.data.codYears);
              this.codYears_sum = this.filtersPortfolioCount(res.data.codYears);
              //panelmaker
              this.panelMaker_count = this.filtersPortfolioSum(res.data.panelMaker);
              this.panelMaker_sum = this.filtersPortfolioCount(res.data.panelMaker);
            }
          })
      },
      filtersPortfolioSum(items) {
        return items.map((item)=>{
         
            return { 
              name: item.label, 
              code: item.code, 
              y: item.indexValues['1'] 
              }
           
        });
      },
      filtersPortfolioCount(items) {
        return items.map((item)=>{
         
            return { 
              name: item.label, 
              code: item.code, 
              y: item.indexValues['2'] 
              }
           
        });
      },
      fetchLatAndLng(){
        this.$axios.get(Portfolio.Locations,{ id: this.category, region: this.region, fit: this.fit, codYears: this.codYears })
          .then((res)=>{
              if(res.code === 0){
                 this.items = (res.data);
              }
          })
      },
      /**
       * 获取面板指标
       */
      fetchDashboard() {
        this.$axios.get(Portfolio.Widgets, {id: this.category, region: this.region, fit: this.fit, codYears: this.codYears})
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

