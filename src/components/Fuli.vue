<template>
  <div class="box">
      <myhead></myhead>
      <weal></weal>
      <myfoot></myfoot>
  </div>
</template>

<script>
import Myhead from '@/components/Myhead'
import Weal from '@/components/Weal'
import MyFoot from '@/components/MyFoot'
export default {
  name: "Fuli",
  components:{
      myhead:Myhead,
      weal:Weal,
      myfoot:MyFoot
  }
 
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
