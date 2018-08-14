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
  import { Project } from '@/http/api'
  export default {
    name: 'sv-detail',
    props: ['id'],
    data() {
      return {
        tableList: []
      }
    },
    components: {
      'sv-panel': SVPanel,
      'sv-detailTable': SVDetailTable,
      'sv-documentMgmt': SVDocumentMgmt
    },
    computed: {
      pageSize() {
        return this.tableList.length/2
      }
    },
    mounted() {
      this.fetchDetailTable();
    },
    methods: {
      fetchDetailTable() {
        this.$axios.get(Project.Items, { pid: this.id})
          .then((res) => {
            if(res.code === 0){ this.tableList = this.filterDetailTable(res.data); }
          })
      },
      filterDetailTable(items) {
        return items.map((item) => {
          return { id: item.key, title: item.name, descript: item.value };
        })
      }
    }
  }
</script>