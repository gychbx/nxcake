<template>
  <div class="box">
      <myhead></myhead>
      <client></client>
      <myfoot></myfoot>
  </div>
</template>

<script>
import Myhead from '@/components/Myhead'
import Client from '@/components/Client'
import MyFoot from '@/components/MyFoot'
export default {
  name: "Kehu",
  components:{
      myhead:Myhead,
      client:Client,
      myfoot:MyFoot
  }
 
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
