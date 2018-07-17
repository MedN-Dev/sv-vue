<template>
  <v-app>
    <!-- 左侧菜单 -->
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- 顶部工具栏 -->
    <v-toolbar
      app
      :clipped-left="clipped"
      color="red darken-3"
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" color="white"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- 内容区域 -->
    <v-content>
      <HelloWorld/>
      <v-btn
        flat
        color="primary"
        @click="showNav = !showNav"
      >
        切換底部導航
      </v-btn>
    </v-content>
    <!-- 底部菜单 -->
    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      color="write"
      fixed
      app
    >
      <v-btn flat color="red darken-3">
        <span>Summary</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn flat color="red darken-3">
        <span>發電實際</span>
        <v-icon>equalizer</v-icon>
      </v-btn>

      <v-btn flat color="red darken-3">
        <span>Event</span>
        <v-icon>date_range</v-icon>
      </v-btn>

      <v-btn flat color="red darken-3">
        <span>詳細 Detail</span>
        <v-icon>book</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      title: 'Solar Value',
      fixed: true,
      activeBtn: 1,
      showNav: true
    }
  }
}
</script>

<style>

</style>

