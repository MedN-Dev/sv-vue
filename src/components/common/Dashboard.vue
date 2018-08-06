<template>
  <div class="sv-dashboard">
    <v-tabs
      v-model="active"
      color="sv_purple"
      dark
    >
      <v-tab-item
        v-for="tab in tabs"
        :key="tab.id"
      >
        <sv-dashboard-item :items="tab.group"></sv-dashboard-item>
      </v-tab-item>
    </v-tabs>
    <div class="sv-dashboard-control">..</div>
  </div>
</template>

<script>
  import MOCK_DASHBOARD_EMPTY from '@/mock/DashboardEmpty.json'
  import MOCK_DASHBOARD from '@/mock/Dashboard.json'
  import SVDashboardItem from './DashboardItem.vue'
  export default {
    props: {
      dashboard: {
        type: Array,
        default: function() {
          return MOCK_DASHBOARD_EMPTY.list;
        }
      }
    },
    components: {
      'sv-dashboard-item': SVDashboardItem
    },
    data () {
      return {
        active: 0
      }
    },
    computed: {
      tabs: {
        get() {
          const temp = [];
          for(var i = 0; i< (this.dashboard.length/3); i++){
            temp.push({
              id: i,
              group: this.dashboard.slice(i*3, i*3+3)
            });
          }
          return temp;
        },
        set() {}
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    },
  }
</script>

<style>
.sv-dashboard-control{
  background: #2c303b;
}
.sv-dashboard .v-tabs__container{
  height: 20px;
}
.sv-dashboard{
  text-align: center;
  margin-bottom: 4px;
}
.sv-dashboard-control{
  line-height: 30px;
}
</style>

