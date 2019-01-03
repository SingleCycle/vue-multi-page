<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="active.html" target="_blank">active html</a></li>
      <li><a href="test.html" target="_blank">test html</a></li>
      <li><a href="cell.html" target="_blank">cell html</a></li>  
      <br>
      <li><router-link to="test">lazy loader test</router-link></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
     // var data = {
     //      pageSize:10,
     //      pageNum:1,
     //      token:'1b870abb03f63a5c8e1a941daf7a084f'
     //  }
     //  this.api.userProblemOrderList(data,function(res){
     //    console.log(res)
     //  },function(error){
     //    console.log(error)
     //  })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-size:26px;
}

a {
  color: #42b983;
}
.hello{
  ul {background:red;padding:20px;
    border: 1px solid #ddd;/*no*/

  }
}
</style>
