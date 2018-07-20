<template>
    <div class="sv-bottom-nav">
        <v-bottom-nav
            :active.sync="activeBtn"
            :value="showNav"
            color="sv_purple"
            fixed
            app
            >
            <router-link v-for="item in updateRouters(routers)" :key="item.text" :to="item.link">
                <v-btn flat dark color="sv_purple_light">
                    <span>{{item.text}}</span>
                    <v-icon color="sv_purple_light">{{item.icon}}</v-icon>
                </v-btn>
            </router-link>
        </v-bottom-nav>
    </div>
</template>

<script>
    export default {
        name: 'sv-bottom-nav',
        props: {
            routers: Array
        },
        data () {
            return {
                activeBtn: 0,
                showNav: true,
                items: [
                    { text: 'summary', icon: 'home', link: `/summary` },
                    { text: 'energy', icon: 'equalizer', link: `/energy` },
                    { text: 'event', icon: 'date_range', link: `/event` },
                    { text: 'detail', icon: 'book', link: `/portfolio` },
                ]
            }
        },
        methods: {
            /**
             * 方法-从父组件传值过来，更新路由链接
             */
            updateRouters: function (newRouters) {
                let index = -1;
                return this.items.map((item) => {
                    index++
                    return { text: item.text, icon: item.icon, link: newRouters[index].link};
                });
            }
        }
    }
</script>


<style>
.sv-bottom-nav a{
    text-decoration: none;
}
</style>
