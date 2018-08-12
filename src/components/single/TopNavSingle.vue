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
            <v-toolbar-side-icon @click.stop="drawer = drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title v-text="title" color="white"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <!-- 返回上層 -->
            <v-tabs color="sv_purple" slot="extension" class="sv-top-nav-back">
                <router-link to="/summary/100">
                    <v-icon>arrow_back</v-icon>
                </router-link>
                <v-spacer></v-spacer>
                <p class="sv-top-nav-title" v-text="projectName"></p>
                <v-spacer></v-spacer>
                <!-- <router-link :to="searchLink">
                    <v-icon>search</v-icon>
                </router-link> -->
            </v-tabs>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'sv-top-nav-single',
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
                projectName: '',
            }
        },
        computed: {
            searchLink() {
                return `/search?name=${this.projectName}`;
            }
        },
        mounted() {
            this.projectName = this.$route.query.name;
        }
    }
</script>

<style>
.v-toolbar__extension{
    background-color: #2c303b;
}
.sv-top-nav-back a{
    text-decoration: none;
    line-height: 56px;
}
.sv-top-nav-title{
    line-height: 48px;
}
</style>
