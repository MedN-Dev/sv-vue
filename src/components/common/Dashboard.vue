<template>
  <div class="sv-dashboard">
    <v-tabs
      v-model="active"
      color="sv_purple"
      dark
      slider-color="yellow"
    >
      <v-tab-item
        v-for="tab in tabs"
        :key="tab.index"
      >
        <sv-dashboard-item :items="tab.items"></sv-dashboard-item>
      </v-tab-item>
    </v-tabs>
    <div class="sv-dashboard-control">..</div>
  </div>
</template>

<script>
  import SVDashboardItem from './DashboardItem.vue'
  export default {
    data () {
      return {
        active: 0,
        tabs: [
          {
            index: 0,
            items: [
              { value: 20, unit: '箇所', text: '発電所数', color: 'sv-dashboard-red' },
              { value: 100, unit: 'MW', text: 'パネル出力', color: 'sv-dashboard-green' },
              { value: 1.1, unit: '百万kwh', text: '当月発電量実績', color: 'sv-dashboard-blue' },
            ]
          },
          {
            index: 1,
            items: [
              { value: 33.6, unit: '百万円', text: '当月売電金額', color: 'sv-dashboard-red' },
              { value: 99, unit: '%', text: '当月売電金額予実比較', color: 'sv-dashboard-green' },
              { value: 0.4, unit: '万kWh', text: '前日発電量実績', color: 'sv-dashboard-blue' },
            ]
          },
        ],
      }
    },
    components: {
      'sv-dashboard-item': SVDashboardItem
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>

<style>
.sv-dashboard-control{
  background: #2c303b;
}
.sv-dashboard .v-tabs__container{
  height: 20px;
}
</style>

