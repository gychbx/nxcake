<template>
  <div class="box">
      <myhead></myhead>
      <contentcaigou></contentcaigou>
      <myfoot></myfoot>
  </div>
</template>

<script>
import Myhead from '@/components/Myhead'
import Contentcaigou from '@/components/Contentcaigou'
import MyFoot from '@/components/MyFoot'
export default {
  name: "Caigou",
  components:{
      myhead:Myhead,
      contentcaigou:Contentcaigou,
      myfoot:MyFoot
  }
 
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
