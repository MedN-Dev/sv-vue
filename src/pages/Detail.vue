<template>
  <div class="sv-page-detail">
    <!-- 项目明细 -->
    <sv-panel title="Detail">
      <sv-detailTable></sv-detailTable>
    </sv-panel>
    <!-- 项目明细 -->
    <sv-panel title="Document">
      <sv-documentMgmt></sv-documentMgmt>
    </sv-panel>
  </div>
</template>

<script>
  import SVPanel from '@/components/common/Panel.vue'
  import SVDetailTable from '@/components/common/DetailTable.vue'
  import SVDocumentMgmt from '@/components/common/DocumentMgmt.vue'
  export default {
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