<template>
    <div id="app">
        <router-view img-set="/static/img/favicon-prod.ico"></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss">
    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        /*解决滑屏卡顿*/
        overflow-x: hidden;
    }

    #app {
        width: 100%;
        height: 100%;
        /*解决滑屏卡顿*/
        -webkit-overflow-scrolling: touch;
    }
</style>
