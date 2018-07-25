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
            </v-layout>
        </v-container>    
    </div>
</template>

<script>
  import particlesJS from 'particles.js'
  import particlesJSON from '../assets/particlesjs-config.json'
  export default {
    name: 'sv-login',
    data: () => ({
      valid: false,
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
            // 发起登录http请求, 保存 session 至浏览器
            setTimeout(()=>{
                let expireDays = 1000 * 60 * 60 * 24 * 15;
                this.setCookie('session', 'dengdengju', expireDays);
                this.$router.push({ path: 'summary/all' });
            }, 1000)
        }
    },
    mounted() {
        // 加载粒子动画
        window.particlesJS('sv_login', particlesJSON);
    }
  }
</script>

<style scopedSlots>
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
