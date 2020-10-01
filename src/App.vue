<template>
    <div id="app" :class="getTheme">
        <router-view/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('fundraiser', ['getTheme'])
    }
}
</script>

<style lang="scss">
    #app {
        min-height: 100vh;
        background: linear-gradient(270deg, #aeecdc, #aecbec, #ecaeae);
        background-size: 600% 600%;
        -webkit-animation: LightTheme 30s ease infinite;
        -moz-animation: LightTheme 30s ease infinite;
        animation: LightTheme 30s ease infinite;
    }


    @-webkit-keyframes LightTheme {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes LightTheme {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes LightTheme {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
</style>
