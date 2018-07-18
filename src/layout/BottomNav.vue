<template>
    <div class="sv-bottom-nav">
        <v-bottom-nav
            :active.sync="activeBtn"
            :value="showNav"
            color="write"
            fixed
            app
            >
            <router-link to="/">
                <v-btn flat color="red darken-3">
                    <span>summary</span>
                    <v-icon>home</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/energy">
                <v-btn flat color="red darken-3">
                    <span>energy</span>
                    <v-icon>equalizer</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/event">
                <v-btn flat color="red darken-3">
                    <span>event</span>
                    <v-icon>date_range</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/portfolio">
                <v-btn flat color="red darken-3">
                    <span>profolio</span>
                    <v-icon>book</v-icon>
                </v-btn>
             </router-link>
        </v-bottom-nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeBtn: 0,
                showNav: true
            }
        }
    }
</script>


<style>
.sv-bottom-nav a{
    text-decoration: none;
}
</style>
