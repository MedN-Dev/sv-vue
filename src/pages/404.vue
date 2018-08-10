<template>
    <div id="sv_404" class="sv-login">
        <v-container class="sv-login-container" grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12>
                    <h1 class="sv_404_logo">4<span class="sv_404_zero">O</span>4</h1>
                    <p>Not Found</p>
                    <a class="sv_404_goback" @click="goback()">www.solar-value.com</a>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import 'particles.js'
  import particlesJSON from '../assets/particlesjs-config.json'
    export default {
    name: 'sv-login',
    data() {
      return {

      }
    },
    mounted() {
        // 加载粒子动画
        window.particlesJS('sv_404', particlesJSON);
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
  }
</script>

<style>
    .sv_404_logo{
        font-size: 8em;
        padding-bottom: 10%;
    }
    .sv_404_zero{
        color: #c7161e;
    }
    .sv-login{
        padding-top: 30%;
        position: relative;
        height: 100%;
        z-index: 1;
    }
    .particles-js-canvas-el{
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
</style>
