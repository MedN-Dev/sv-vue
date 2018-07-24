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
        data () {
            return {
                showNav: true,
                items: [
                    { id: 0, name: 'summarySingle', text: 'summary', icon: 'home', link: `/project/${this.$route.params.id}/summary` },
                    { id: 1, name: 'energySingle', text: 'energy', icon: 'equalizer', link: `/project/${this.$route.params.id}/energy` },
                    { id: 2, name: 'eventSingle', text: 'event', icon: 'date_range', link: `/project/${this.$route.params.id}/event` },
                    { id: 3, name: 'detail', text: 'detail', icon: 'book', link: `/project/${this.$route.params.id}/detail` },
                ]
            }
        },
        computed: {
            activeNav: {
                get() {
                    let activeItem = this.items.filter((item) => {
                        if(this.$route.name == item.name) return item;
                    });
                    return activeItem[0].id;
                },
                set(value) {
                    // console.log('下菜单', value)
                }
            }
        }
    }
</script>


<style>
.sv-bottom-nav a{
    text-decoration: none;
}
</style>
