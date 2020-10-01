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
        background: linear-gradient(180deg, #e0f7f1, #f5dabf);
        background-size: 400% 400%;

        -webkit-animation: LightTheme 0s ease infinite;
        -moz-animation: LightTheme 0s ease infinite;
        animation: LightTheme 0s ease infinite;
    }


    @-webkit-keyframes LightTheme {
        0%{background-position:56% 0%}
        50%{background-position:45% 100%}
        100%{background-position:56% 0%}
    }
    @-moz-keyframes LightTheme {
        0%{background-position:56% 0%}
        50%{background-position:45% 100%}
        100%{background-position:56% 0%}
    }
    @keyframes LightTheme {
        0%{background-position:56% 0%}
        50%{background-position:45% 100%}
        100%{background-position:56% 0%}
    }
</style>
