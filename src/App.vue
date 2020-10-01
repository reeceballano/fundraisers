<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('fundraiser/fetchFundraisers')
    }
}
</script>

<style lang="scss">

</style>
