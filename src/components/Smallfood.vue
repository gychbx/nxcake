
<template>
  <div class="box">
      <myhead></myhead>
      <food></food>
      <myfoot></myfoot>
  </div>
</template>

<script>
import Myhead from '@/components/Myhead'
import Food from '@/components/Food'
import MyFoot from '@/components/MyFoot'
export default {
  name: "Smallfood",
  components:{
      myhead:Myhead,
      food:Food,
      myfoot:MyFoot
  }
 
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
