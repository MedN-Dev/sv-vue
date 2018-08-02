<template>
  <v-layout class="sv-dashboard-warp" row wrap>
    <v-flex class="sv-dashboard-item" v-for="(item, index) in items" :key="index" xs4>
      <h1 class="display-3">{{item.value}}</h1>
      <h5 class="caption">{{item.unit}}</h5>
      <h5 class="caption">{{item.name}}</h5>
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
    watch: {
    }
  }
</script>

<style scoped>
.sv-dashboard-warp{
  background: #2c303b
}
.sv-dashboard-item:nth-child(1) h1{
  color: #fe6c6e;
}
.sv-dashboard-item:nth-child(2) h1{
  color: #2eba87;
}
.sv-dashboard-item:nth-child(3) h1{
  color: #5478e5;
}
.sv-dashboard-item:nth-child(4) h1{
  color: #ffc000;
}
</style>
