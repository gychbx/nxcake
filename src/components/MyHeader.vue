<template>
  <div class="container">
      <div class='loginandreg'>
          <div>
              <div class='right'>
                  <div>
                      <span>登录</span>
                      <span>/</span>
                      <span>注册</span>
                  </div>
                  <div>微信公众号
                    <img src="../../static/wxpop.png">
                  </div>
              </div>
          </div>
      </div>
      <div class='nav'>
        <div class='lineone'>
            <div>
                <img width="20" src="../../static/location.png">
                <span style='font-size:12px'>成都</span>
                <span style='padding-left:5px;font-size:12px;color:#888'>查询地址是否可配送</span>
            </div>
            <img src="../../static/logo.png">
            <div>
                  <input type="text" size=25 placeholder="雪域牛乳芝士">
                  <img width="20" src="../../static/search.png">
                  <img style='padding-left:20px' width="20" src="../../static/shopping.png" >
            </div>
        </div>
        <div class='linetwo'>
            <ul>
                <li v-for='(item,index) in arr' :key='(item,index)' :style='active===index?mystyle1:""'>
                   <router-link @click.native='change(index)' :style='active===index?mystyle2:""' class='link' :to='item.two'>{{item.one}}</router-link>
                   <ul v-if='index===4' class='hoverdiv'>
                        <li v-for="(item,index) in list1"  @click='tonewpage2(index)' :key='(item,index)'>{{item}}</li>
                   </ul>
                   <ul v-else-if="index===5" class='hoverdiv'>
                        <li v-for="(item,index) in list2" @click='tonewpage(index)' :key='(item,index)'>{{item}}</li>
                   </ul>
                </li>
            </ul>
        </div>
      </div>
      <div class='hidenav' v-show='scrolldata>150'>
          <img src="../../static/logo.png">
          <ul>
              <li v-for='(item,index) in arr' :key='(item,index)' :style='active===index?mystyle1:""'>
                  <router-link @click.native='hidechange(index)' class='hidelink' :style='active===index?mystyle2:""' :to='item.two'>{{item.one}}</router-link>
                   <ul v-if='index===4' class='hoverdiv2'>
                        <li v-for="(item,index) in list1" :key='(item,index)'>{{item}}</li>
                   </ul>
                   <ul v-else-if="index===5" class='hoverdiv2'>
                        <li v-for="(item,index) in list2" :key='(item,index)'>{{item}}</li>
                   </ul>
              </li>
          </ul>
            <div class='hideright'>
                <img class='img1' src="../../static/location.png" alt="">
                <span style='font-size:12px;padding-right:3px'>成都</span>
                <input v-show='showinput' type="text" size=20 placeholder="雪域牛乳芝士">
                <img @click='handlesearch2' src="../../static/search.png" alt="">
                <div style='position:relative'>
                  <img src="../../static/user.png" style='width:25px;height:25px;padding:10px;' alt="">
                  <ul>
                    <li style='border-bottom:1px solid #999'>登录</li>
                    <li>注册</li>
                  </ul>
                </div>
                <img src="../../static/shopping.png" alt="">
            </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'MyHeader',
  data(){
    return {
      showinput:false,
      scrolldata:0,
      active:0,
      list1:["企业采购","大客户区","福利券区","合作专区","小食盒区"],
      list2:["我的aha","我的订单","找回密码","礼券专区","卡券兑换"],
      arr:[{one:"首页",two:'/home'},{one:"蛋糕",two:'/cake'},{one:"土司",two:'/bread'},{one:"礼品",two:'/gift'},{one:"企业专区",two:'/company'},{one:"我的诺心",two:'/mynx'}],
      mystyle1:{
        borderBottom:'2px solid orange'
      },
      mystyle2:{
       color:"red"
      }
    }
  },
  methods:{
    change:function(index){
       this.active=index;
    },
    hidechange:function(index){
        this.active=index;
    },
    handlescroll:function(){
          var scrollTop = window.pageYOffset || (document.documentElement.scrollTop+document.body.scrollTop)
          this.scrolldata=scrollTop;
    },
    handlesearch2:function(){
          this.showinput=true;
    },
    tonewpage:function(index){
          if(index===0){
            this.$router.push('/aha');
          }else if(index==1){
            this.$router.push('/reg2');
          }
    },
    tonewpage2:function(index){
          if(index===0){
            this.$router.push('/caigou');
          }else if(index==1){
            this.$router.push('/kehu');
          }else if(index==2){
            this.$router.push('/fuli');
          }else if(index==3){
            this.$router.push('/hezuo');
          }else if(index==4){
            this.$router.push('/smallfood');
          }
    }
  },
  mounted:function(){
    window.addEventListener('scroll',this.handlescroll,false)
  },
  destroyed:function(){
    window.removeEventListener('scroll', this.handlescroll,false)
  }
}
</script>
<style  scoped>
.hideright>div>ul{
  list-style: none;
  background-color: #fff;
  width:80px;
  position: absolute;
  left:-15px;
  top:50px;
  display: none;
}
.hideright>div:hover>ul{
  display: block;
}
.hideright>div>ul>li{
  font-size: 12px;
  width:30px;
  height:20px;
  padding:10px 0; 
  cursor: pointer; 
  margin:0 auto;
  text-align: center;
}
.hideright>div>ul>li:hover {
  color:orange;
}
.hideright>input {
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 12px;
  padding: 2px 4px;
}
.img1 {
   width:25px;
   height:25px;
   padding: 10px 0px 10px 10px;
}
.hideright {
  display: flex;
  align-items: center;
}
.hideright>img:not(.img1){
  width:25px;
  height:25px;
  padding:10px;
}
.hidenav {
  width:100%;
  padding:0 200px;
  height:60px;
  position:fixed;
  top:0;
  left: 0;
  z-index: 4;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
}
.hidelink:hover {
 color:orange;
}
.hidelink {
  text-decoration: none;
  color:#666;
}
.hidenav>img{
  width:207px;
  height:24px;
}
.hidenav>ul{
    height:60px;
    list-style: none;
    display:flex;
}
.hidenav>ul>li{
    width:76px;
    height:60px;
    line-height: 60px;
    text-align: center;
    position: relative;
}
.link {
  color:#333;
  text-decoration: none;
}
.link:hover {
  color:orange;
}
.nav input {
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 12px;
  padding: 2px 4px;
}
.lineone {
  height:54px;
  width:80%;
  margin:0 auto;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.lineone>div:first-child{
  height:24px;
  display: flex;
  align-items: center;
}
.lineone span:nth-child(2) {
  cursor: pointer;
}
.lineone span:nth-child(2):hover{
  color:orange;
}
.lineone>div:last-child{
  height:24px;
  display: flex;
  align-items: center;
}
.linetwo {
  height:70px;
}
.linetwo>ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
.linetwo>ul>li{
  width:112px;
  height:20px;
  padding:24px 0px;
  text-align: center;
  position: relative;
}
.linetwo>ul>li:hover ul{
  display: block;
}
.hidenav>ul>li:hover ul{
  display: block;
}
.hoverdiv {
  list-style: none;
  position: absolute;
  width:100px;
  background-color: #fff;
  top:60px;
  left:0;
  z-index: 3;
  padding:5px;
  display: none;
}
.hoverdiv> li{
    padding:5px 0;
    color:#333;
    cursor: pointer;
}
.hoverdiv> li:hover{
    color:orange;
}
.hoverdiv2 {
  list-style: none;
  position: absolute;
  width:76px;
  background-color: #fff;
  top:60px;
  left:0;
  display: none;
}
.hoverdiv2> li{
    line-height:40px; 
    color:#666;
    cursor: pointer;
}
.hoverdiv2> li:hover{
    color:orange;
}
.container{
    width:100%;
    height:155px;
}
.loginandreg {
    width:100%;
    height:30px;
    background-color: #eee;
}
.loginandreg>div{
  width:80%;
  height:100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end
}
.nav {
    width:100%;
    height:124px;
}
.loginandreg .right{
  width:180px;
  height:100%;
}
.right {
  display: flex;
  justify-content: space-between;
}
.right span:first-child:hover{
  color:orange
}
.right span:first-child {
  cursor: pointer;
}
.right span:last-child {
  cursor: pointer;
}
.right span:last-child:hover{
  color:orange
}
.right>div:first-child {
  line-height: 30px;
  font-size: 12px;
}
.right>div:last-child{
  width:60px;
  padding-left: 36px;
  font-size:12px;
  line-height: 30px;
  background: url('../../static/wx.png') no-repeat 8px 50%;
  background-size:20px 20px;
  cursor: pointer;
  position: relative
}
.right img {
  position:absolute;
  left:-66px;
  top:20px;
  z-index: 3;
  display: none;
}
.right>div:last-child:hover {
  color:orange;
}
.right>div:last-child:hover img {
  display: block;
}
</style>