<template>
  <div class="box">
      <myhead></myhead>
      <cooperate></cooperate>
      <myfoot></myfoot>
  </div>
</template>

<script>
import Myhead from '@/components/Myhead'
import Cooperate from '@/components/Cooperate'
import MyFoot from '@/components/MyFoot'
export default {
  name: "Hezuo",
  components:{
      myhead:Myhead,
      cooperate:Cooperate,
      myfoot:MyFoot
  }
 
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
