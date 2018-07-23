<template>
    <div class="sv-bottom-nav">
        <v-bottom-nav
            :active.sync="activeNav"
            @update:active="select"
            :value="showNav"
            color="sv_purple"
            fixed
            app
            >
            <router-link v-for="item in routers" :key="item.text" :to="item.link" class="sv-bottomNav-link">
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
            routers: Array,
            active: Number
        },
        data () {
            return {
                activeNav: this.active,
                showNav: true,
            }
        },
        methods: {
            select() {
                this.$store.dispatch('selectBottomNav', this.activeNav);
            }
        }
    }
</script>


<style scoped>
.sv-bottomNav-link{
    text-decoration: none;
}
</style>
