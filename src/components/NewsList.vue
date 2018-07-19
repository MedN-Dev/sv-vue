<template>
    <div class="sv-newsList">
        <span class="sv-newsList-title">{{title}}</span>
        <table class="sv-newsList-table" border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.text}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import * as API from '../config/api.js';
    export default {
        name: 'sv-newsList',
        data() {
            return {
                title: '从 sv-egg 服务器请求 restful api 接口',
                items: []
            }
        },
        mounted() {
            axios.get(API.News.newsList)
                .then(response => {
                    this.items = response.data.data;
                });
        }
    }
</script>

<style>
    .sv-newsList-table{
        margin: 0 auto;
    }
    .sv-newsList-title{
        display: inline;
        text-align: center;
    }
</style>
