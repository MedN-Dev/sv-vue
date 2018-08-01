<template>
  <div class="sv-dataTable">
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="desserts"
          hide-actions
          class="sv-dataTable-table"
        >
        <template slot="items" slot-scope="props">
          <td class="sv-dataTable-title text-xs-left">{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.col1 }}</td>
          <td class="text-xs-right">{{ props.item.col2 }}</td>
          <td class="text-xs-right">{{ props.item.col3 }}</td>
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
        headers: [
          { text: '', value: 'name', sortable: false, align: 'left'},
          { text: '実績值', value: 'calories',sortable: false, align: 'right',},
          { text: '予測値', value: 'fat', sortable: false, align: 'right',},
          { text: '予実比較', value: 'carbs', sortable: false, align: 'right',}
        ],
        desserts: [
          { title: '発電量', col1: 110, col2: 110, col3: 110 },
          { title: '日射量', col1: 45, col2: 110, col3: 110 },
          { title: '売電額', col1: 159, col2: 110, col3: 110 }
        ]
      }
    }
  }
</script>

<style>
.sv-dataTable .v-table{
  background-color: transparent;
}
.sv-dataTable .v-table tbody tr:hover:not(.v-datatable__expand-row) {
  background: transparent;
}
.sv-dataTable-table{
  margin-bottom: 20px;
}
</style>

