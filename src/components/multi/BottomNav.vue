<template>
  <div class="sv-bottom-nav">
    <v-bottom-nav
      :active.sync="activeNav"
      :value="showNav"
      color="sv_purple"
      fixed
      app
      >
      <router-link v-for="item in items" :key="item.text" :to="item.link" class="sv-bottomNav-link">
        <v-btn flat dark color="sv_write">
          <span>{{item.text}}</span>
          <v-icon color="sv_write">{{item.icon}}</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'sv-bottom-nav',
  data () {
    return {
        showNav: true,
        activeIndex: 1
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
        this.activeIndex = value;
      }
    },
    items: function() {
      return [
        { id: 0, name: 'summary', text: 'SUMMARY', icon: 'home', link: `/summary/${this.$route.params.category}` },
        { id: 1, name: 'energy', text: '発電実際', icon: 'equalizer', link: `/energy/${this.$route.params.category}` },
        { id: 2, name: 'event', text: 'EVENT', icon: 'date_range', link: `/event/${this.$route.params.category}` },
        { id: 3, name: 'portfolio', text: 'PORTFOLIO', icon: 'insert_chart', link: `/portfolio/${this.$route.params.category}` },
      ]
    }
  }
}
</script>

<style scoped>
.sv-bottomNav-link{ text-decoration: none; }
</style>
