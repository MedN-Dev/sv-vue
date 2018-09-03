<template>
  <div class="sv-multi-topNav">
    <!-- 左侧抽屉菜单 -->
      <v-navigation-drawer
        class="sv-multi-drawer"
        persistent
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        fixed
        width="200"
        height="200"
      > 
      <v-flex xs12>
        <v-card dark color="sv_purple">
          <v-card-text class="px-0 loginName">
            歓迎：{{ nick }}
            ({{ companyName }})
          </v-card-text>
        </v-card>
      </v-flex>
        <!-- 左侧菜单项 -->
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in itemsLeft"
            :key="i"
            v-ripple
            :href="item.link"
            
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon" color="sv_write"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="sv-multi-drawer-title" v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- 顶部工具栏 -->
      <v-toolbar
        class="sv-multi-toolbar"
        app
        :clipped-left="clipped"
        color="sv_purple"
        dark
        dense
        height="48"
        tabs
      >
        <!-- 抽屉菜单Icon -->
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <!-- tab選項 -->
        <v-tabs
          slot="extension"
          v-model="activeNav"
          color="sv_purple"
          grow
        >
          <v-tabs-slider color="sv_purple_light"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item.id">
              <router-link :key="item.id" :to="item.link" class="sv-topNav-link">
                {{ item.text }}
              </router-link>
          </v-tab>
        </v-tabs>
      </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sv-top-nav',
  data() {
    return {
      clipped: false,
      drawer: false,
      itemsLeft: [
        { id: 0, icon: 'account_box', title: 'ログアウト', link: '/login' },
        { id: 1, icon: 'search', title: '検索', link: '/search?name=千厩' }
      ],
      fixed: true,
      activeNav: 0,
    }
  },
  computed: {
     ...mapGetters([
      'nick',
      'companyName',
      'category',
      'topBar'
    ]),
    // 计算当前导航的路由
    items() {
      return this.topBar.map((item) => {
        return {
            id: item.id,
            name: item.name,
            text: item.text,
            link: `/${this.$route.name}/${item.name}`
        }
      });
    }
  },
  watch: {
    topBar() {
      this.activeNav = this.topBar.filter((item) => {
          if(this.category == item.name) return item;
      })[0].itemIndex;
    }
  }
}
</script>

<style>
.sv-multi-topNav .sv-topNav-link{ color: #fff; text-decoration: none; }
.sv-multi-topNav .v-toolbar__extension{ width: 86%; float: right !important; background-color: #2c303b; padding-left: 0px; }
.sv-multi-topNav .v-toolbar__content{ float: left !important; padding-right: 0px; }
.sv-project-multi .v-content{ padding-top: 48px !important; }
.sv-project-multi .sv-multi-drawer{ background: #2c303b; }
.sv-project-multi .sv-multi-drawer-title{ color: #fff !important; text-decoration: none !important; }
.loginName{padding: 16px !important}
</style>
