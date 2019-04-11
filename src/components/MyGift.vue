<template>
  <div class="container">
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
                    <p class="three">{{item.three}}
                        <span v-if='index===18' style='color:#fff;font-size:12px;background-color:goldenrod'>加购价</span>
                        <span v-if='index===18' style='color:goldenrod;'>￥38</span>
                    </p>
                    <span class="four">{{item.four}}</span>
                </div>  
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyGift',
  data(){
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
            },
            {
                imgurl: "../../static/gift5.jpg",
                one: "喵叽叽云顶小花曲奇礼盒·宠溺双拼（原味+咖啡味）",
                two: "专享价",
                three: "￥158",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift6.jpg",
                one: "喵叽叽云顶小花曲奇礼盒·元气双拼（原味+巧克力味）",
                two: "专享价",
                three: "￥158",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift7.jpg",
                one: "喵叽叽云顶小花曲奇礼盒·软萌双拼（咖啡味+抹茶味）",
                two: "专享价",
                three: "￥158",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift8.jpg",
                one: "喵叽叽云顶小花曲奇礼盒（原味）",
                two: "专享价",
                three: "￥158",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift9.jpg",
                one: "喵叽叽云顶小花曲奇礼盒（巧克力味）",
                two: "专享价",
                three: "￥158",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift10.jpg",
                one: "喵叽叽云顶小花曲奇礼盒（咖啡味）",
                two: "专享价",
                three: "￥158",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift11.jpg",
                one: "喵叽叽云顶小花曲奇礼盒（抹茶味）",
                two: "专享价",
                three: "￥158",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift12.jpg",
                one: "金喜新年礼包",
                two: "",
                three: "￥198",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift13.jpg",
                one: "千层蝴蝶酥•月影礼盒（24片装）",
                two: "",
                three: "¥168",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift14.jpg",
                one: "千层蝴蝶酥•拾光礼盒（39片装）",
                two: "",
                three: "¥298",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift15.jpg",
                one: "费南雪金砖形礼盒（8枚入）",               
                two: "顺丰物流配送",
                three: "¥128",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift16.jpg",
                one: "核桃曲奇礼盒（迷迭紫）",
                two: "",
                three: "¥98",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift17.jpg",
                one: "浪漫巴黎曲奇礼包（混合装）",
                two: "",
                three: "¥68",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift18.jpg",
                one: "个性字母透明挎包",
                two: "秀场街拍潮品",
                three: "¥68",
                four: "加入购物车>"
            },
                {
                imgurl: "../../static/gift19.jpg",
                one: "千层蝴蝶酥·For Me（原味）",
                two: "",
                three: "¥98",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/gift20.jpg",
                one: "乐熊熊曲奇礼盒",
                two: "",
                three: "¥128",
                four: "加入购物车>"
            }
         ]
    }
  }
}
</script>
<style  scoped>
.container{
    width:100%;
}
.gift {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  background-color: #eee;
}
.gift > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
  background-color: #fff;
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