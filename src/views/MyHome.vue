<template>
  <div class="container">
    <el-carousel trigger="click" height="475px">
      <el-carousel-item v-for="item in carouselarr" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="cake_wrap">
      <div class="cake">
        <img src="../../static/homecakeleft.jpg" alt>
        <img src="../../static/homecakeright.jpg" alt>
        <div v-for="(item,index) in cakearr" :key="(item,index)">
            <div>
                <img :src="item.imgurl" alt>
            </div>
            <div class='box'>
                <div>
                    <p class="one">{{item.one}}</p>
                    <div v-if='item.two==="专享价"' :style='mystyle1'>
                            <img src="../../static/aha.png" width='42' height='14'>
                            <span>{{item.two}}</span>
                    </div>
                    <div v-else>
                            <span :style='mystyle2'>{{item.two}}</span>
                    </div>
                </div>
                <div>
                    <p class="three">{{item.three}}</p>
                    <span class="four">{{item.four}}</span>
                </div>  
            </div>
        </div>
        <span style="position:absolute;right:0;bottom:0;cursor:pointer">更多蛋糕></span>
      </div>
    </div>
    <img src="../../static/homebread.jpg" width='100%' style='padding:20px 0' alt="">
    <div class="bread">
        <div v-for="(item,index) in breadarr" :key="(item,index)">
            <div>
                <img :src="item.imgurl" alt>
            </div>
            <div class='box'>
                <div>
                    <p class="one">{{item.one}}</p>
                    <div v-if='item.two==="专享价"' :style='mystyle1'>
                            <img src="../../static/aha.png" width='42' height='14'>
                            <span>{{item.two}}</span>
                    </div>
                    <div v-else>
                            <span :style='mystyle2'>{{item.two}}</span>
                    </div>
                </div>
                <div>
                    <p class="three">{{item.three}}</p>
                    <span class="four">{{item.four}}</span>
                </div>  
            </div>
        </div>
        <span style="position:absolute;right:0;bottom:0;cursor:pointer">更多土司></span>
    </div>
    <img src="../../static/homegift.jpg" width='100%' style='padding:20px 0' alt="">
    <div class="gift">
        <div v-for="(item,index) in giftarr" :key="(item,index)">
            <div>
                <img :src="item.imgurl" alt>
            </div>
            <div class='box'>
                <div>
                    <p class="one">{{item.one}}</p>
                    <div v-if='item.two==="专享价"' :style='mystyle1'>
                            <img src="../../static/aha.png" width='42' height='14'>
                            <span>{{item.two}}</span>
                    </div>
                    <div v-else>
                            <span :style='mystyle2'>{{item.two}}</span>
                    </div>
                </div>
                <div>
                    <p class="three">{{item.three}}</p>
                    <span class="four">{{item.four}}</span>
                </div>  
            </div>
        </div>
        <span style="position:absolute;right:0;bottom:0;cursor:pointer">更多礼品></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHome",
  data() {
    return {
      mystyle1: {
        backgroundColor: "red",
        width: "96px",
        height: "20px",
        lineHeight: "20px",
        fontSize: "14px",
        color: "#fff"
      },
      mystyle2: {
        backgroundColor: "orange",
        fontSize: "14px",
        color: "#fff"
      },
      carouselarr: [
        "../../static/crs1.jpg",
        "../../static/crs2.jpg",
        "../../static/crs3.jpg",
        "../../static/crs4.jpg",
        "../../static/crs5.jpg"
      ],
      cakearr: [
        {
          imgurl: "../../static/cake1.jpg",
          one: "雪域牛乳芝士蛋糕·浓4.9",
          two: "专享价",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake2.gif",
          one: "玩味魔法蛋糕",
          two: "专享价",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake3.jpg",
          one: "雪域莓莓芝士蛋糕·浓4.9",
          two: "专享价",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake4.jpg",
          one: "雪域曲奇芝士蛋糕·浓4.9",
          two: "专享价",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake5.jpg",
          one: "雪域牛乳芝士蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake6.jpg",
          one: "数字蛋糕",
          two: "第二件半价 第三件免单",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake7.jpg",
          one: "美刀刀蛋糕",
          two: "",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake8.jpg",
          one: "草莓千层蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        }
      ],
         breadarr: [
        {
          imgurl: "../../static/bread1.jpg",
          one: "原味匠心吐司（整条）",
          two: "金牌土司",
          three: "￥78",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/bread2.jpg",
          one: "巧克力吐司（整条）",
          two: "人气明星",
          three: "￥88",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/bread3.jpg",
          one: "吐司经典套餐",
          two: "",
          three: "￥198",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/bread4.jpg",
          one: "吐司尊享套餐",
          two: "",
          three: "￥298",
          four: "加入购物车>"
        }
      ],
       giftarr: [
        {
          imgurl: "../../static/gift1.jpg",
          one: "喵叽叽·傲娇小花礼包",
          two: "专享价",
          three: "￥396",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/gift2.jpg",
          one: "喵叽叽·元气宠溺礼包",
          two: "专享价",
          three: "￥396",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/gift3.jpg",
          one: "喵叽叽云顶小花曲奇礼盒·好奇四拼（原味+咖啡味+抹茶味+巧克力味）",
          two: "专享价",
          three: "￥238",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/gift4.jpg",
          one: "喵叽叽云顶小花曲奇礼盒·傲娇三拼（咖啡味+巧克力味+抹茶味）",
          two: "专享价",
          three: "￥158",
          four: "加入购物车>"
        }
      ]
    };
  }
};
</script>
<style  scoped>
.container {
  width: 100%;
}
.el-carousel__item > img {
  width: 100%;
  height: 475px;
}
.cake_wrap {
  width: 100%;
  height: 1160px;
  position: relative;
}
.cake {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  position: absolute;
  z-index: 2;
  left: 50%;
  margin-left: -600px;
  top: -100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cake > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
}
.cake > div:hover {
  background-color: lavenderblush;
}
.cake > div:hover > div > img {
  transform: scale(1.1);
}
.cake > div > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.cake > div > div:first-child {
  width: 260px;
  height: 260px;
  overflow: hidden;
}
.bread {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}
.bread > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
}
.bread > div:hover {
  background-color: lavenderblush;
}
.bread > div:hover > div > img {
  transform: scale(1.1);
}
.bread > div > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.bread > div > div:first-child {
  width: 260px;
  height: 260px;
  overflow: hidden;
}
.gift {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}
.gift > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
}
.gift > div:hover {
  background-color: lavenderblush;
}
.gift > div:hover > div > img {
  transform: scale(1.1);
}
.gift > div > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.gift > div > div:first-child {
  width: 260px;
  height: 260px;
  overflow: hidden;
}
.box {
    width:260px;
    height:132px;
    display:flex;   
    flex-direction: column;
    justify-content: space-between;
}
.one {
  font-size: 14px;
  color: #333;
  padding: 8px 0;
}
.three {
  font-size: 16px;
  color: #333;
}
.four {
  font-size: 12px;
  color: red;
  padding: 5px 0px;
  cursor: pointer;
}
</style>