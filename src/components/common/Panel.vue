<template>
    <div class="sv-panel">
        <v-layout row wrap>
            <v-flex class="sv-panel-header" xs12>
                <v-layout row wrap>
                    <v-flex xs4>
                        <v-card-text class="sv-panel-title" align="left">{{title}}</v-card-text>
                    </v-flex>
                    <v-flex xs8>
                        <v-card-text class="sv-panel-next" align="right">
                            <v-icon small color="sv_gray">keyboard_arrow_right</v-icon>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex class="sv-panel-body" xs12>
                <slot></slot>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        data() {
            return {
                
            }
        }
    }
</script>

<style>
.sv-panel{
    background: #2c303b;
    margin-top: 4px;
}
.sv-panel-title{
    padding-left: 10px;
    color: #999;
}
.sv-panel-next{
    padding-right: 10px;
}
</style>

