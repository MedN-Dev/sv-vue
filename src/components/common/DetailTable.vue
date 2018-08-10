<template>
  <div class="sv-detailTable">
    <v-layout row wrap>
      <v-flex xs12> 
        <v-data-table
          hide-headers
          :items="tableList"
          hide-actions
          class="sv-detailTable-table"
        >
        <template slot="items" slot-scope="props">
          <td class="sv-detailTable-title text-xs-left">{{ props.item.title }}</td>
          <td class="sv-detailTable-descript text-xs-right">{{ props.item.descript }}</td>
        </template>
      </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'sv-detailTable',
    props: {
      tableList: {
        type: Array,
        default: ()=>{
          return [
            { title: '所在地', descript: '岩手县一关市', },
            { title: 'Panel出力', descript: '10,793.64KW', },
            { title: 'Panel枚数', descript: '42,328枚', },
            { title: '発電設備容量', descript: '7,920KW', },
            { title: 'FIT価格', descript: '36円/KWH', },
            { title: '年間予想発電量', descript: '11,473,361/KWH', },
            { title: '運転開始日', descript: '2015/12/20', }
          ]
        }
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
.sv-detailTable{
  padding: 0 4px;
}
.sv-detailTable .v-table{
  background-color: transparent;
  border: 1px solid hsla(0,0%,100%,.12);
}
.sv-detailTable-title{
  background-color: #676c8a;
  width: 40%;
}
.sv-detailTable-descript{
  width: 60%;
}
.sv-detailTable .v-table tbody tr:hover:not(.v-datatable__expand-row) {
  background: transparent;
}
.sv-detailTable-table{
  margin-bottom: 20px;
}
</style>

