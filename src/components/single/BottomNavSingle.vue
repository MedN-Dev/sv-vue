<template>
    <div class="sv-bottom-nav-single">
        <v-bottom-nav
            :active.sync="activeNav"
            :value="showNav"
            color="sv_purple"
            fixed
            app
            >
            <router-link v-for="item in items" :key="item.id" :to="item.link" class="sv-bottomNav-link">
                <div class="sv-bottom-nav-btn" v-ripple>
                    <span v-html="item.text"></span>
                    <v-icon color="sv_write" v-html="item.icon"></v-icon>
                </div>
            </router-link>
        </v-bottom-nav>
    </div>
</template>

<script>
    export default {
        name: 'sv-bottom-nav-single',
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
                { id: 1, name: 'energySingle', text: '発電実績', icon: 'equalizer', link: `/project/${this.$route.params.id}/energy?name=${this.$route.query.name}` },
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


<style scoped>
.sv-bottom-nav-btn{ 
    height: 100%; 
    color: #fff;
    opacity: 0.5; 
    display: flex; 
    align-items:center; 
    justify-content: center;
    flex-direction:column-reverse; 
    max-width: 168px;
    min-width: 80px;
    font-weight: 400;
    padding: 8px 12px 10px;
}
.router-link-active .sv-bottom-nav-btn{ opacity: 1 !important; }
.sv-bottomNav-link{ text-decoration: none; }
</style>
