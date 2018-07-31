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
            <v-btn flat value="center">
              発生事象
            </v-btn>
          </v-btn-toggle>
        </v-flex>
    </v-layout>
    <!-- Table list -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-list>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="item.index"
              avatar
              ripple
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.subtitle }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>
                  {{ item.location }} 
                  </v-list-tile-action-text>
                  
                   <v-icon size=20>location_on</v-icon>
              </v-list-tile-action>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  // import SVSkeleton from '../components/common/Skeleton.vue'
  export default {
    data() {
        return {
          text: 'left',
          items: [
            { id: 0, location: '金尺',  title: '除草作业', subtitle: '2018/05/25' },
            { id: 1, location: '北斗',  title: '学生见习', subtitle: '2018/05/15' },
            { id: 2, location: '山神',  title: '年次检点', subtitle: '2018/05/01' },
            { id: 3, location: '金尺',  title: '学生见习', subtitle: '2018/04/25' },
            { id: 4, location: '北海道',  title: '除草作业', subtitle: '2018/03/20' },
            { id: 5, location: '山神',  title: '年次检点', subtitle: '2018/05/01' },
            { id: 6, location: '金尺',  title: '学生见习', subtitle: '2018/04/25' },
            { id: 7, location: '北海道',  title: '除草作业', subtitle: '2018/03/20' },
          ]
        }
    },
    components: {
      // 'sv-skeleton': SVSkeleton
    }
  }
</script>
<style scoped>
.theme--dark .v-list{
  background: transparent;
}
</style>


