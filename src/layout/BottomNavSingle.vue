<template>
    <div class="sv-bottom-nav">
        <v-bottom-nav
            :active.sync="activeBtn"
            :value="showNav"
            color="sv_purple"
            fixed
            app
            >
            <router-link v-for="item in items" :key="item.text" :to="item.link">
                <v-btn flat color="sv_red">
                    <span>{{item.text}}</span>
                    <v-icon>{{item.icon}}</v-icon>
                </v-btn>
            </router-link>
        </v-bottom-nav>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data () {
            return {
                activeBtn: 0,
                showNav: true,
                items: [
                    { text: 'summary', icon: 'home', link: `/project/${this.id}` },
                    { text: 'energy', icon: 'equalizer', link: `/project/${this.id}/energy` },
                    { text: 'event', icon: 'date_range', link: `/project/${this.id}/event` },
                    { text: 'detail', icon: 'book', link: `/project/${this.id}/detail` },
                ]
            }
        }
    }
</script>


<style>
.sv-bottom-nav a{
    text-decoration: none;
}
</style>
