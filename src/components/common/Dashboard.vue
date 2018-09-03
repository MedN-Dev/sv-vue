<template>
  <div class="sv-dashboard">
    <v-tabs
      v-model="active"
      color="sv_purple"
      dark
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
      ></v-tab>
      <v-tabs-slider color="sv_purple"></v-tabs-slider>
      <v-tab-item
        v-for="tab in tabs"
        :key="tab.id"
      >
        <sv-dashboard-item :items="tab.group"></sv-dashboard-item>
      </v-tab-item>
    </v-tabs>
    <div class="sv-dashboard-control" v-html="control"></div>
  </div>
</template>

<script>
  import MOCK_DASHBOARD_EMPTY from '@/mock/DashboardEmpty.json'
  import SVDashboardItem from './DashboardItem.vue'
  export default {
    name: 'sv-dashboard',
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
        active: 0,
      }
    },
    watch: {
      dashboard() {
        this.active = 0;
      }
    },
    computed: {
      tabs() {
        const temp = [];
        for(var i = 0; i< (this.dashboard.length/3); i++){
          temp.push({
            id: i,
            group: this.dashboard.slice(i*3, i*3+3)
          });
        }
        return temp;
      },
      control() {
        let point = '';
        for(let i = 0; i< Math.ceil(this.dashboard.length/3); i++) {
          this.active === i? point += '<i class="sv-dashboard-point">.</i>' : point += '<i class="">.</i>'; 
        }
        return point;
      }
    }
  }
</script>

<style>
.caption{font-size: 14px!important}
.sv-dashboard-control{ background: #2c303b; }
.sv-dashboard .v-tabs__container{ height: 20px; }
.sv-dashboard{ text-align: center; margin-bottom: 4px; }
.sv-dashboard-control{ line-height: 30px; font-size: 16px;}
.sv-dashboard-point{ font-size: 30px !important}
</style>

