<template>
  <div class="sv-detailTable">
    <v-layout row wrap>
      <v-flex xs12> 
        <v-data-table
          hide-headers
          :items="desserts"
          hide-actions
          class="sv-detailTable-table"
        >
        <template slot="items" slot-scope="props">
          <td class="sv-detailTable-title text-xs-left">{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.descript }}</td>
        </template>
      </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        desserts: [
          { title: '所在地', descript: '岩手县一关市', },
          { title: 'Ice cream sandwich', descript: 237, },
          { title: 'Frozen Yogurt', descript: 159, },
          { title: 'Ice cream sandwich', descript: 237, },
          { title: 'Frozen Yogurt', descript: 159, },
          { title: 'Ice cream sandwich', descript: 237, },
          { title: 'Ice cream sandwich', descript: 237, }
        ]
      }
    }
  }
</script>

<style>
.sv-detailTable{
  padding: 0 10px;
}
.sv-detailTable .v-table{
  background-color: transparent;
  border: 1px solid hsla(0,0%,100%,.12);
}
.sv-detailTable-title{
  background-color: #676c8a;
}
.sv-detailTable .v-table tbody tr:hover:not(.v-datatable__expand-row) {
  background: transparent;
}
.sv-detailTable-table{
  margin-bottom: 20px;
}
</style>

