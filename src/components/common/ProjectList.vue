<template>
  <div class="sv-projectList">
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
       
      }
    },
    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>

