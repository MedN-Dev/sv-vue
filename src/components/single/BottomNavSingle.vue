<template>
    <div class="sv-bottom-nav">
        <v-bottom-nav
            :active.sync="activeNav"
            :value="showNav"
            color="sv_purple"
            fixed
            app
            >
            <router-link v-for="item in items" :key="item.text" :to="item.link">
                <v-btn flat color="sv_write">
                    <span>{{item.text}}</span>
                    <v-icon color="sv_write">{{item.icon}}</v-icon>
                </v-btn>
            </router-link>
        </v-bottom-nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showNav: true,
                activeNav: 0,
                items: []
            }
        },
        mounted() {
            this.items = [
                { id: 0, name: 'summarySingle', text: 'SUMMARY', icon: 'home', link: `/project/${this.$route.params.id}/summary?name=${this.$route.query.name}` },
                { id: 1, name: 'energySingle', text: '発電実際', icon: 'equalizer', link: `/project/${this.$route.params.id}/energy?name=${this.$route.query.name}` },
                { id: 2, name: 'eventSingle', text: 'EVENT', icon: 'date_range', link: `/project/${this.$route.params.id}/event?name=${this.$route.query.name}` },
                { id: 3, name: 'detail', text: 'DETAIL', icon: 'description', link: `/project/${this.$route.params.id}/detail?name=${this.$route.query.name}` },
            ];
            this.setDefaultNav();
        },
        methods: {
            setDefaultNav() {
                this.activeNav = this.items.filter((item) => {
                    if(this.$route.name == item.name) return item;
                })[0].id;
            }
        }
    }
</script>


<style>
.sv-bottom-nav a{
    text-decoration: none;
}
</style>
