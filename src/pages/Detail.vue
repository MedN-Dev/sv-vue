<template>
  <div class="sv-page-detail">
    <!-- 组件-项目明细 -->
    <sv-panel>
      <sv-detailTable :tableList="tableList" :pageSize="pageSize"></sv-detailTable>
    </sv-panel>
    <!-- 组件-文档管理 -->
    <sv-panel title="Document">
      <sv-documentMgmt :projectId="id"></sv-documentMgmt>
    </sv-panel>
  </div>
</template>

<script>
  import SVPanel from '@/components/common/Panel.vue'
  import SVDetailTable from '@/components/common/DetailTable.vue'
  import SVDocumentMgmt from '@/components/single/detail/DocumentMgmt.vue'
  export default {
    name: 'sv-detail',
    props: ['id'],
    data() {
      return {
        pageSize: 10,
        tableList: [
          { title: '所在地', descript: '岩手县一关市', },
          { title: 'Panel出力', descript: '10,793.64KW', },
          { title: 'Panel枚数', descript: '42,328枚', },
          { title: '発電設備容量', descript: '7,920KW', },
          { title: 'FIT価格', descript: '36円/KWH', },
          { title: '年間予想発電量', descript: '11,473,361/KWH', },
          { title: '所在地', descript: '岩手县一关市', },
          { title: 'Panel出力', descript: '10,793.64KW', },
          { title: 'Panel枚数', descript: '42,328枚', },
          { title: '発電設備容量', descript: '7,920KW', },
          { title: 'FIT価格', descript: '36円/KWH', },
          { title: '年間予想発電量', descript: '11,473,361/KWH', },
          { title: '運転開始日', descript: '2015/12/20', },
          { title: '所在地', descript: '岩手县一关市', },
          { title: 'Panel出力', descript: '10,793.64KW', },
          { title: 'Panel枚数', descript: '42,328枚', },
          { title: '発電設備容量', descript: '7,920KW', },
          { title: 'FIT価格', descript: '36円/KWH', },
          { title: '年間予想発電量', descript: '11,473,361/KWH', },
          { title: '運転開始日', descript: '2015/12/20', }
        ]
      }
    },
    components: {
      'sv-panel': SVPanel,
      'sv-detailTable': SVDetailTable,
      'sv-documentMgmt': SVDocumentMgmt
    },
  }
</script>

<style>

</style>