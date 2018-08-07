<template>
    <div id="sv_login" class="sv-login">
        <v-container class="sv-login-form" grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12>
                    <h1 class="sv_login_logo">S<i class="sv_login_logo_pointer"></i>lar Value</h1>
                </v-flex>
                <v-flex :key="0" xs1/>
                <v-flex :key="1" xs10>
                    <v-form v-model="valid">
                        <v-text-field
                            v-model="username"
                            :rules="usernameRules"
                            label="Username"
                            clearable
                            required
                            @click="alert=false"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            :append-icon="show ? 'visibility_off' : 'visibility'"
                            :rules="passwordRules"
                            :type="show ? 'text' : 'password'"
                            name="input-10-1"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show = !show"
                            @click="alert=false"
                        ></v-text-field>
                        <v-btn
                            large
                            color="sv_purple_light"
                            :disabled="!valid"
                            @click="submit"
                            class="sv_login_btn"
                            >
                            Login
                        </v-btn>
                    </v-form>
                </v-flex>
                <v-flex :key="2" xs1/>
                <v-alert
                    :value="alert"
                    type="error"
                    icon="warning"
                    transition="scale-transition"
                    outline
                    >
                    Password Error
                </v-alert>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import 'particles.js'
  import particlesJSON from '../assets/particlesjs-config.json'
  //import axios from 'axios'
  //import * as API from '../utils/api.js'
    export default {
    name: 'sv-login',
    data: () => ({
      valid: false,
      alert: false,
      username: 'dengdeng@sail-fs.com',
      usernameRules: [
        v => !!v || 'username is required',
        v => /.+@.+/.test(v) || 'username must be valid',
      ],
      password: 'wj871287',
      show: false,
      passwordRules: [
        v => !!v || 'password is required',
        v => v.length >= 8 || 'Min 8 characters',
      ]
    }),
    methods: {
        submit() {
            const expireDays = 1000 * 60 * 60 * 24 * 15;
            const cookie = 'ufe_dMg_uzRkd3GuZLZUcYe-aXu9HROpLX1vX2agYGX4h68fyQSRrGUkTLNXF29y2UcOphgMq1AgE_1PMVKuudUrvTGA0mgR8EaRpe368XuEMxaprtwQ97tFw_30HyKeOc0km-9f89Su2G40Pwg1EJbuQnxx_fiStPVlRSJEcPujo7Xd9X67j8CEfJCqJYb4eoCQt78L4cN2Xw4C4UEOkiM1aBXc0Z9oUNbhAgCL5cZ5sqoQXTZBa6oasrvm0Vb9zd_ui0Gtag5IK2j8yFIsID5gmcmQdUvTh4NMv6rKJhNxjpJlA1iw89zpBAfYiyCsLxgSTAhP6SR6wweiPUHnjTY6-9bXFQqzNH3mkzmzBJAxQ-ZPk8h3825rpvjYFYwg89o6LR-DD0NzyDB8pvl1k97ciBH-Va_T67DyCDTkYLry_bmxfQsfmOwjGbAygd1YRUg_M1aq996puntTg8pCGDeR1Wulj5B3Se6hrMG_6XDd-RHUH7rIG5NDlm8h5CD5VhR8bF7NHLlWba52w4ViPg';
            this.$setCookie('.AspNet.ApplicationCookie', cookie, expireDays);
            this.$router.push({ path: 'summary/100' });
            // const params = { username: this.username, password: this.password, _csrf: this.$store.state.token };
            // axios.post(API.Account.Login, params)
            //     .then((response) => {
            //         if(response.data.code == 1){
            //             let expireDays = 1000 * 60 * 60 * 24 * 15;
            //             this.$setCookie('sv_login_session', response.data.data.session, expireDays);
            //             this.$router.push({ path: 'summary/all' });
            //         }else{
            //             this.alert = true;
            //         }
            //     });
        }
    },
    mounted() {
        // 加载粒子动画
        window.particlesJS('sv_login', particlesJSON);
    }
  }
</script>

<style>
    .sv_login_logo{
        font-size: 3em;
        padding-bottom: 10%;
    }
    .sv_login_logo_pointer{
        display: inline-block;
        line-height: 0.5em;
        color: #c7161e;
        font-weight: bold;
        background: #c7161e;
        height: 0.5em;
        width: 0.5em;
        border-radius: 0.25em;
    }
    .sv_login_btn{
        width: 90%;
        margin-top: 3em;
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
