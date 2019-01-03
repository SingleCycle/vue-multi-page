<template>
    <div id="app">
      <div class="hello">
          <h1>{{ msg }}</h1>
          <img src='static/img/icon_opensafari.png'/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  components: { },
  data () {
    return {
      msg: '活动多页面测试'
    }
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

