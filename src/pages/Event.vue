<template>
  <!-- <sv-skeleton/> -->
  <v-container grid-list-md text-xs-center>
    <!-- Radio Button -->
    <v-layout row wrap>
       <v-flex xs12 sm6 class="py-2">
          <v-btn-toggle v-model="text">
            <v-btn flat value="left">
              事件予定
            </v-btn>
            <v-btn flat value="right">
              発生事象
            </v-btn>
          </v-btn-toggle>
        </v-flex>
    </v-layout>
    <!-- Table list -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-list>
          <template v-for="(item, index) in list">
            <v-list-tile
              :key="item.index"
              avatar
              ripple
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.date }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>
                {{ item.location }} 
                </v-list-tile-action-text>
                <v-icon size=16>location_on</v-icon>
              </v-list-tile-action>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < list.length"
              :key="index"
            ></v-divider>
          </template>
          
        </v-list>
      </v-flex>
    </v-layout>
    <!-- lazy-loading component -->
    <vue-infinite-loading @infinite="infiniteHandler"></vue-infinite-loading>
  </v-container>
</template>
<script>
  import VueInfiniteLoading from 'vue-infinite-loading'
  import MOCK_EVENTLIST from '@/mock/EventList.json'
  import MOCK_EVENTLIST_HAPEN from '@/mock/EventListHapen.json'
  export default {
    data() {
        return {
          text: 'left',
          list: []
        }
    },
    methods: {
      infiniteHandler($state) {
        setTimeout(() => {
          const temp = MOCK_EVENTLIST.events;
          this.list = this.list.concat(temp);
          $state.loaded();
        }, 1000);
      },
    },
    components: {
      'vue-infinite-loading': VueInfiniteLoading,
    }
  }
</script>
<style scoped>
.theme--dark .v-list{
  background: transparent;
}
</style>


