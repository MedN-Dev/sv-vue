<template>
  <v-layout class="sv-dashboard-warp" row wrap>
    <v-flex class="sv-dashboard-item" v-for="(item, index) in items" :key="index" xs4>
      <h1 :class="`display-1 ${item.color}`">{{item.value}}</h1>
      <h5 :class="`subheading`">{{item.unit}}</h5>
      <h5 class="caption">{{item.text}}</h5>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['items'],
    data() {
      return {
      }
    }
  }
</script>

<style>
.sv-dashboard-warp{
  background: #2c303b
}
.sv-dashboard-red{
  color: #fe6c6e;
}
.sv-dashboard-green{
  color: #2eba87;
}
.sv-dashboard-blue{
  color: #5478e5;
}
.sv-dashboard-yellow{
  color: #ffc000;
}
</style>
