<template>
  <div class="sv-documentMgmt">
    <!-- Tab头 -->
    <v-tabs
      slot="extension"
      v-model="tab"
      color="sv_purple"
      grow
    >
      <v-tabs-slider color="sv_purple_light"></v-tabs-slider>

      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <!-- Tab体 -->
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
      <!-- Document List -->
      <v-list two-line>
        <template v-for="(item, index) in list">
          <v-list-tile
            :key="item.index"
            avatar
            ripple
            @click="download(item.src)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.date }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon
                color="grey lighten-1"
              >
                cloud_download
              </v-icon>
            </v-list-tile-action>

          </v-list-tile>
          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import { Project } from '@/http/api.js'
  export default {
    name: 'sv-documentMgmt',
    props: ['projectId'],
    data() {
      return {
        tab: null,
        items: [
          '月次报告书', '施工图', '契约书'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: [
          { title: '岩手县一关市月次报告书', date: '2018/05', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
          { title: '北斗县一关市月次报告书', date: '2018/04', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
          { title: '山神县一关市月次报告书', date: '2018/03', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' }
        ]
      }
    },
    mounted() {
      this.fetchDocumentList();
    },
    methods: {
      fetchDocumentList() {
        this.$axios.get(Project.Documents, { pid: this.projectId, type: 'monthlyreport', page: 1, pagesize: 10 })
          .then((res)=>{
            this.list = this.filterDocumentList(res.data.items);
          });
      },
      filterDocumentList(items) {
        return items.map((item)=>{
          return { id: item.id, title: item.name, date: item.date, src: item.url }
        })
      },
      download() {
        // location.href = src;
      }
    },
  }
</script>

<style>
.sv-documentMgmt .v-list{
  background: transparent;
}
</style>

