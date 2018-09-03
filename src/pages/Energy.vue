<template>
  <div class="sv-page-energy">
    <sv-dashboard :dashboard="dashboard"></sv-dashboard>
    <sv-panel title="全体実績">
      <!-- <sv-monthSelect slot="right" :default="start" @listenStart="val=>{this.start=val}" @listenEnd="val=>{this.end=val}"></sv-monthSelect> -->
      <sv-dayToDaySelect slot="right" :default="start" @listenStart="val=>{this.start=val}" @listenEnd="val=>{this.end=val}"></sv-dayToDaySelect>
      <!-- 组件-发电量图表 -->
      <sv-highCharts-energy id="sv_hightCharts_energy" :category="category" :start="start" :end="end"></sv-highCharts-energy>
    </sv-panel>
    <sv-panel title="個別実績">
      <!-- Radio Button -->
      <v-layout row wrap text-xs-center>
        <v-flex xs12 sm6 class="py-2">
          <v-btn-toggle v-model="trigger" mandatory>
            <v-btn flat value="output">
              発電量(万kWh)
            </v-btn>
            <v-btn flat value="SunRadiation">
              日射量(kWh/m2)
            </v-btn>
            <v-btn flat value="sell">
              売電額(万円)
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
      <!-- 项目列表 -->
      <sv-projectList-energy :category="category" :start="start" :end="end" :source="trigger" ></sv-projectList-energy>
    </sv-panel>
  </div>
</template>

<script>
  import SVPanel from '@/components/common/Panel.vue'
  import SVDashboard from '@/components/common/Dashboard.vue'
  import SVMonthSelect from '@/components/common/MonthSelect.vue'
  import SVHighchartsEnergy from '@/components/common/HighchartsEnergy.vue'
  import SVProjectListEnergy from '@/components/multi/energy/ProjectListEnergy.vue'
  import SVDayToDaySelect from '@/components/common/DayToDaySelect.vue'
  import { Widgets } from '@/http/api'
  import SVDate from '@/utils/date'
  export default {
    name: 'sv-energy',
    props: {
      category: String, 
    },
    data() {
      return {
        start: SVDate.getThisMonthDay(),
        end: SVDate.getNextMonthDay(SVDate.getThisMonthDay()),
        dashboard: [],
        trigger: 'output'
      }
    },
    components: {
      'sv-dashboard': SVDashboard,
      'sv-projectList-energy': SVProjectListEnergy,
      'sv-panel': SVPanel,
      'sv-highCharts-energy': SVHighchartsEnergy,
      'sv-monthSelect': SVMonthSelect,
      'sv-dayToDaySelect': SVDayToDaySelect
    },
    watch: {
      category() { this.fetchDashboard(); }
    },
    mounted() {
      this.fetchDashboard();
    },
    methods: {
      fetchDashboard() {
        this.$axios.get(Widgets.Data, {cid: this.category, type: 'energy'})
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