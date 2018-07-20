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
                v-model="active"
                color="sv_purple"
                grow
            >
                <v-tabs-slider color="sv_purple_light"></v-tabs-slider>
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.id"
                >
                    {{ tab.name }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <!-- tab切換區域 -->
        <!-- <v-tabs-items v-model="active">
            <v-tab-item
                v-for="tab in tabs"
                :key="tab.id"
            >
                <v-card flat>
                <v-card-text>{{ tab.text }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items> -->
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
                fixed: true,
                active: null,
                tabs: [
                    { id: 0, name: 'All', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                    { id: 1, name: 'RJ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                    { id: 2, name: 'Infra', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                    { id: 3, name: '東急不', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                    { id: 4, name: 'Favorite', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                ]
            }
        },
        watch: {
            active: function(newActive, oldActive) {
                switch(newActive){
                    case 0:
                        newActive = 'all';
                    break;
                    case 1:
                        newActive = 'rj';
                    break;
                    case 2:
                        newActive = 'infra';
                    break;
                    case 3:
                        newActive = 'djb';
                    break;
                    case 4:
                        newActive = 'favorite';
                    break;
                    default:
                        newActive = 'all';
                    break;
                }
                this.$emit('changeCategory', newActive);
            }
        },
    }
</script>

<style>
.v-toolbar__extension{
    background-color: #2c303b;
}
</style>
