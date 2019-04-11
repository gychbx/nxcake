<template>
  <div class="container">
      <div class="cake">
        <ul>
            <li>
                <span>口味：</span>
                <span class='des' @click='changecolor1(index)' :style='active1===index?colorstyle:""' v-for="(item,index) in testarr" :key='(item,index)'>{{item}}</span>
            </li>
            <li>
                <span>规格：</span>
                <span class='des' @click='changecolor2(index)' :style='active2===index?colorstyle:""' v-for="(item,index) in scalearr" :key='(item,index)'>{{item}}</span>
            </li>
        </ul>
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
        <div style='background-color:#eee'></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyCake',
  data(){
    return {
        active1:0,
        active2:0,
        colorstyle:{
            color:"orangered"
        },
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
      testarr:["全部","雪域鲜乳4.9","雪域口味","巧克力味","芝士口味","慕斯口味","鲜果口味","冰淇淋味","奶油口味"],
      scalearr:["全部","2-4人食","5-8人食","10-12人食","15-20人食"],
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
          imgurl: "../../static/cake5.jpg",
          one: "雪域牛乳芝士蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake9.jpg",
          one: "提拉米苏·写意蛋糕",
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
          imgurl: "../../static/cake8.jpg",
          one: "草莓千层蛋糕",
          two: "",
          three: "￥218",
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
          imgurl: "../../static/cake10.jpg",
          one: "原味千层蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake11.jpg",
          one: "雪域粉爱拍档蛋糕·浓4.9",
          two: "专享价",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake12.jpg",
          one: "草莓拿破仑蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake13.jpg",
          one: "雪域莓飞色舞蛋糕·浓4.9",
          two: "",
          three: "￥298",
          four: "加入购物车>"
        },
         {
          imgurl: "../../static/cake14.jpg",
          one: "蓝莓拿破仑蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
          {
          imgurl: "../../static/cake15.jpg",
          one: "雪域奇趣天成蛋糕·浓4.9",
          two: "专享价",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake16.jpg",
          one: "环游世界蛋糕",
          two: "+58元升级",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake17.jpg",
          one: "诺心花园·春鸣蛋糕",
          two: "HOT",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake18.jpg",
          one: "草莓雪域芝士蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        },
         {
          imgurl: "../../static/cake19.jpg",
          one: "怦然心动蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
          {
          imgurl: "../../static/cake20.jpg",
          one: "真爱“粉钻”蛋糕",
          two: "专享价",
          three: "￥298",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake21.jpg",
          one: "玫瑰雪域芝士蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake22.jpg",
          one: "粉色玫瑰森林蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake23.jpg",
          one: "雪域蓝莓芝士蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
         {
          imgurl: "../../static/cake24.jpg",
          one: "雪域大理石芝士蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
          {
          imgurl: "../../static/cake25.jpg",
          one: "牛乳蓝莓雪域双拼蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake26.jpg",
          one: "猪光宝气蛋糕",
          two: "专享价",
          three: "￥368",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake27.jpg",
          one: "携手·环游世界蛋糕",
          two: "",
          three: "￥228",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake28.jpg",
          one: "红圆舞蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        },
         {
          imgurl: "../../static/cake29.jpg",
          one: "实栗派核桃栗蓉蛋糕",
          two: "HOT +58升级",
          three: "￥218",
          four: "加入购物车>"
        },
            {
          imgurl: "../../static/cake30.jpg",
          one: "公主蛋糕",
          two: "",    
          three: "￥218",
          four: "加入购物车>"
        },
          {
          imgurl: "../../static/cake31.jpg",
          one: "王子蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake32.jpg",
          one: "巧克力四重奏蛋糕",
          two: "+58元升级",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake33.jpg",
          one: "巧克力松露蛋糕",
          two: "专享价",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake34.jpg",
          one: "和风抹茶红豆蛋糕",
          two: "+58元升级",
          three: "￥218",
          four: "加入购物车>"
        },
         {
          imgurl: "../../static/cake35.jpg",
          one: "莓果缤纷蛋糕",
          two: "198蛋糕卡免差",
          three: "￥336",
          four: "加入购物车>"
        },
          {
          imgurl: "../../static/cake36.jpg",
          one: "海盐乳酪芝士蛋糕",
          two: "+58元升级",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake37.jpg",
          one: "牛乳大理石雪域双拼蛋糕",
          two: "",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake38.jpg",
          one: "阿尔蒙麦香蛋糕",
          two: "58元升级",
          three: "￥218",
          four: "加入购物车>"
        },
        {
          imgurl: "../../static/cake39.jpg",
          one: "阿尔蒙洛克蛋糕",
          two: "58元升级",
          three: "￥218",
          four: "加入购物车>"
        }
      ]
    }
  },
  methods:{
      changecolor1:function(index){
          this.active1=index;
      },
      changecolor2:function(index){
          this.active2=index;
      }
  }
}
</script>
<style  scoped>
.container{
    width:100%;
}
.cake {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  background-color: #eee;
}
.cake > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
  background-color: #fff;
}
.cake>ul {
    width:1168px;
    height:100px;
    background-color:#fff;
    padding:10px 16px;
    margin-bottom:20px;
    list-style:none;
}
ul>li{
    height:50px;
    line-height: 50px;
}
ul>li>span{
   margin-right: 40px;
   color:#555;
   font-size: 14px;
}
.des{
    cursor: pointer;
}
.des:hover{
    color: orangered;
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