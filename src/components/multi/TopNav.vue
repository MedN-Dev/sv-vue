<template>
    <div class="sv-top-nav">
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
            color="sv_red"
            dark
            dense
            height="0"
            tabs
            >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title v-text="title" color="white"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <!-- tab選項 -->
            <v-tabs
                slot="extension"
                v-model="activeNav"
                color="sv_purple"
                grow
            >
                <v-tabs-slider color="sv_purple_light"></v-tabs-slider>
                <v-tab
                    v-for="item in routers"
                    :key="item.id"
                >
                    <router-link :key="item.id" :to="item.link" class="sv-topNav-link">
                        {{ item.text }}
                    </router-link>
                </v-tab>
            </v-tabs>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'sv-top-nav',
        props: {
            routers: Array,
            active: Number
        },
        data() {
            return {
                clipped: false,
                drawer: false,
                items: [
                    { icon: 'home', title: 'Home' }, 
                    { icon: 'equalizer', title: 'Energy' }
                ],
                title: 'Solar Value',
                fixed: true,
                activeNav: this.active,
            }
        },
        watch: {
            // 底部选中状态一旦改变，立即更新 store
            activeNav() {
                this.$store.dispatch('selectTopNav', this.activeNav);
            },
            // 对路由变化作出响应, 更新状态
            '$route' (to, from) {
                if(to.path != from.path){
                    console.log(to, from);
                }
            }
        },
    }
</script>

<style scoped>
.v-toolbar__extension{
    background-color: #2c303b;
}
.sv-topNav-link{
    color: #fff;
    text-decoration: none;
}
</style>
