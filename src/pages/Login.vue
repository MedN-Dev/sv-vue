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
                            @click:append="show = !show"
                            @click="alert=false"
                        ></v-text-field>
                        <v-checkbox
                            v-model="remenber"
                            label="Remenber Me ?"
                            required
                        ></v-checkbox>
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
                    {{passError}}
                </v-alert>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import 'particles.js'
  import particlesJSON from '../assets/particlesjs-config.json'
  import { Account } from '@/http/api.js'
    export default {
    name: 'sv-login',
    data: () => ({
      valid: false,
      alert: false,
      username: '',
      usernameRules: [
        v => !!v || 'username is required',
        // v => /.+@.+/.test(v) || 'username must be valid',
      ],
      password: '',
      show: false,
      passwordRules: [
        v => !!v || 'password is required',
        // v => v.length >= 8 || 'Min 8 characters',
      ],
      passError: '',
      remenber: true
    }),
    watch: {
        remenber(val) {
            val ? this.remenberMe() : this.forgetMe();
        }
    },
    created() {
        this.setDefaultLogin();
    },
    mounted() {
        this.logOut();
        // 加载粒子动画
        window.particlesJS('sv_login', particlesJSON);
    },
    methods: {
        submit() {
            this.remenberMe();
            this.$axios.post(`${Account.Login}`, { LoginName: this.username, Password: this.password })
                .then((res) => {
                    if(res.Code === 0){
                      this.$store.dispatch('FETCH_USERINFO');
                      this.$router.push({ path: '/summary/1' });
                    }else{
                        this.passError = res.Message;
                        this.alert = true;
                    }
                });
        },
        logOut() {
            this.$axios.post(`${Account.Logout}`);
        },
        remenberMe() {
            let expiredays = 60 * 60 * 60 * 24 * 30;
            this.$setCookie('REMENBER_USER', this.username, expiredays);
            this.$setCookie('REMENBER_PASSWORD', this.password, expiredays);
        },
        forgetMe() {
            this.$deleteCookie('REMENBER_USER');
            this.$deleteCookie('REMENBER_PASSWORD');
        },
        setDefaultLogin() {
            this.username = this.$getCookie('REMENBER_USER');
            this.password = this.$getCookie('REMENBER_PASSWORD');
            console.log(this.$getCookie('REMENBER_USER'))
        }
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
