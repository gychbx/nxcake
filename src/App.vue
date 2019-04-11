<template>
  <div id="app">
    <router-view/>
    <my-foot></my-foot>
  </div>
</template>

<script>
import MyFoot from "./components/MyFoot"
export default {
  name: 'App',
  components:{
  	"my-foot":MyFoot
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
