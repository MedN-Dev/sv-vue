<template>
  <v-layout class="sv-dashboard-warp" row wrap>
    <v-flex class="sv-dashboard-item" v-for="(item, index) in items" :key="index" xs4>
      <h1 class="display-3">{{item.value | capitalize }}</h1>
      <h5 class="caption">{{item.unit | capitalize }}</h5>
      <h5 class="caption">{{item.name | capitalize }}</h5>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      items: Array
    },
    data() {
      return {
        
      }
    },
    filters: {
      // 过滤器-为空则显示 ‘-’
      capitalize(value) {
        return value? value : '-';
      }
    }
  }
</script>

<style scoped>
.sv-dashboard-warp{ background: #2c303b }
.sv-dashboard-item:nth-child(1) h1{ color: #fe6c6e; }
.sv-dashboard-item:nth-child(2) h1{ color: #2eba87; }
.sv-dashboard-item:nth-child(3) h1{ color: #5478e5; }
.sv-dashboard-item:nth-child(4) h1{ color: #ffc000; }
</style>
