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
            >
            <v-toolbar-side-icon @click.stop="drawer = drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title" color="white"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'sv-top-nav',
        data() {
            return {
                clipped: false,
                drawer: false,
                items: [
                    { icon: 'home', title: 'Home' }, 
                    { icon: 'equalizer', title: 'Energy' }
                ],
                title: 'Solar Value',
                fixed: true
            }
        }
    }
</script>