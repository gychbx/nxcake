<template>
  <div>
    <my-header></my-header>
    <router-view/>
    <my-foot></my-foot>
  </div>
</template>

<script>
import MyHeader from "./MyHeader"
import MyFoot from "./MyFoot"
export default {
  name: 'Shouye',
  components:{
    "my-foot":MyFoot,
    "my-header":MyHeader
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
