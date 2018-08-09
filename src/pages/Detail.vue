<template>
  <div class="sv-page-detail">
    <!-- 组件-项目明细 -->
    <sv-panel title="Detail">
      <sv-detailTable></sv-detailTable>
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