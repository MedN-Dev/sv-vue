<template>
    <div class="sv-skeleton">
        <vue-content-loader
            :height="160"
            :width="400"
            :speed="2"
            primaryColor="#2c303b"
            secondaryColor="#2c303b"
        >
            <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" /> 
            <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" /> 
            <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" /> 
            <circle cx="78" cy="38" r="30" /> 
            <circle cx="196.4541316015003" cy="37.22413160150032" r="29.95413160150032" /> 
            <circle cx="312.76962173533065" cy="38.53962173533062" r="30.26962173533062" />
        </vue-content-loader>
    </div>
</template>

<script>
    import { ContentLoader } from 'vue-content-loader'
    export default {
        data() {
            return {

            }
        },
        components: {
            'vue-content-loader': ContentLoader
        }
    }
</script>
