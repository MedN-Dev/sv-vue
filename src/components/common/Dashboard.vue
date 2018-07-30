<template>
  <div class="sv-dashboard">
    <v-tabs
      v-model="active"
      color="sv_purple"
      dark
      slider-color="yellow"
    >
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-card flat color="sv_purple">
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: null,
        tabResouse: [
          { value: 20, unit: '箇所', text: '発電所数' }
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>
