<template>
  <div class="box">
    <div class="top">
      <div>
        <a href="#">
          <i class="placeImg"></i>
          {{place}}
        </a>
      </div>
      <div>
        <a href="#"><i class="kefuImg"></i>在线客服</a>
        <a href="#"> <i class="weixinImg"></i>微信公众号</a>
      </div>
    </div>
    <div class="mynav">
      <div class="logImg">
        <a href="#"><img src="http://rescdn.lapetit.cn/shop/lecake/theme/xth2/images_new/logo_new.png" alt></a>
      </div>
      <div>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">蛋糕</a></li>
          <li><a href="#">吐司</a></li>
          <li><a href="#">礼品</a></li>
          <li>
            <a href="#" class="aqiyezhuanqu">企业专区
              <div class="qiyezhuanqu">
                <router-link to="/">企业采购</router-link>
                <router-link to="/client">大客户区</router-link>
                <router-link to="/weal">福利券区</router-link>
                <router-link to="/cooperate">合作专区</router-link>
                <router-link to="/food">小食盒区</router-link>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="amynuoxin">我的诺心
              <div class="mynuoxin">
                <a href="#">我的aha</a>
                <a href="#">我的订单</a>
                <a href="#">找回密码</a>
                <a href="#">礼卡专区</a>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="login">
          <a href="#">登录</a><span>/</span>
          <a href="#">注册</a>
          <a href="#"><i class="buycarImg"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHead",
  data() {
    return {
      place: "成都"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: red;
}
*{
  font-size: 14px;
}
.box {
  height: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 100;
}
.top {
  display: flex;
  padding: 4px 5%;
  justify-content: space-between;
  background: #F5F5F5;
}
i {
  display: inline-block;
  background-size: 18px 18px;
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.placeImg {
  background-image: url("../assets/地点.png");
}
.kefuImg {
  background-image: url("../assets/客服.png");
}
.weixinImg {
  background-image: url("../assets/weixin.png");
}
.buycarImg {
   background-image: url("../assets/购物车.png"); 
}
.logImg img {
  width: 172.5px;
  height: 20px;
  padding-top: 4px;
}
.mynav {
  display: flex;
  align-items: center;
  width: 90%;
  height: 20px;
  padding: 30px 5%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
}
ul {
  display: flex;
  width: 300%;
  height: 20px;
  justify-content: space-between;
  /* background: blanchedalmond; */
}
li {
  list-style: none;
  height: 20px;
  width: 15%;
  text-align: center;
}
.qiyezhuanqu {
  /* display: flex; */
  display: none;
  flex-direction: column;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
}
.qiyezhuanqu a {
  height: 30px;
  line-height: 30px;
}
.aqiyezhuanqu:hover div {
  display: flex;
}
.mynuoxin {
  /* display: flex; */
  display: none;
  flex-direction: column;
  position: relative;
    background: rgba(255, 255, 255, 0.9);
}
.mynuoxin a {
  height: 30px;
  line-height: 30px;
}
.amynuoxin:hover div {
  display: flex;
}
.login {
    margin-left:60%; 
}
</style>
