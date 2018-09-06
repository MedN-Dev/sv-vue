<template>
  <div class="sv-detailTable">
    <v-tabs
      v-model="active"
      color="sv_purple"
      dark
    >
      <v-tab-item
        v-for="tab in tabs"
        :key="tab.id"
      >
        <!-- 插槽滚频内容 -->
        <v-layout row wrap>
          <v-flex xs12> 
            <v-data-table
              hide-headers
              :items="tab.group"
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
      </v-tab-item>
    </v-tabs>
    <div class="sv-detailTable-control" v-if="control!='.'" v-text="control"></div>
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
            { title: 'パネル出力', descript: '10,793.64kW', },
            { title: 'パネル枚数', descript: '42,328枚', },
            { title: '発電設備容量', descript: '7,920kW', },
            { title: 'FIT価格', descript: '36円/kWH', },
            { title: '年間予想発電量', descript: '11,473,361/kWH', },
            { title: '運転開始日', descript: '2015/12/20', }
          ]
        }
      },
      pageSize: {
        type: Number,
        default: 6
      }
    },
    data() {
      return {
         active: 0,
      }
    },
    computed: {
      tabs() {
        const temp = [];
        for(var i = 0; i< (this.tableList.length/this.pageSize); i++){
          temp.push({
            id: i,
            group: this.tableList.slice(i*this.pageSize, i*this.pageSize+this.pageSize)
          });
        }
        return temp;
      },
      control() {
        let point = '';
        for(let i = 0; i< Math.ceil(this.tableList.length/this.pageSize); i++) { point += '.'; }
        return point;
      }
    },
  }
</script>

<style>
.sv-detailTable{
  padding: 0 4px;
}
.sv-detailTable .v-tabs__container{
  height: 0px;
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
.sv-detailTable-control{
  text-align: center;
}
.v-table tbody tr td{
    text-transform: none!important;
}
.table.v-table tbody td{
  font-size: 16px!important;
}
</style>

