<template>
  <div class="container">
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
        <div style='background-color:#eee'></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyBread',
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
         breadarr: [
            {
                imgurl: "../../static/bread5.jpg",
                one: "巧克力吐司（半条）",
                two: "人气明星",
                three: "￥68",
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
                imgurl: "../../static/bread6.jpg",
                one: "原味匠心吐司（半条）",
                two: "金牌土司",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread1.jpg",
                one: "原味匠心吐司（整条）",
                two: "金牌土司",
                three: "￥78",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread7.jpg",
                one: "橙香提子吐司（半条）",
                two: "",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread8.jpg",
                one: "橙香提子吐司（整条）",
                two: "",
                three: "￥78",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread9.jpg",
                one: "彩虹吐司（半条）",
                two: "",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread10.jpg",
                one: "彩虹吐司（整条）",
                two: "",
                three: "￥78",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread11.jpg",
                one: "芝麻吐司（半条）",
                two: "",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread12.jpg",
                one: "芝麻吐司（整条）",
                two: "",
                three: "￥78",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread13.jpg",
                one: "栗子吐司（半条）",
                two: "",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread14.jpg",
                one: "栗子吐司（整条）",
                two: "",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread15.jpg",
                one: "莓粉吐司（草莓风味半条装）",
                two: "",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread16.jpg",
                one: "莓粉吐司（草莓风味整条装）",
                two: "",
                three: "￥78",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread17.jpg",
                one: "软萌小白吐司（半条）",
                two: "",
                three: "￥48",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread18.jpg",
                one: "莓你不行吐司（草莓风味半条装）",
                two: "",
                three: "￥58",
                four: "加入购物车>"
            },
            {
                imgurl: "../../static/bread19.jpg",
                one: "吐司超值套餐",
                two: "",
                three: "￥108",
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
         ]
    }
  }
}
</script>
<style  scoped>
.container{
    width:100%;
}
.bread {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  background-color: #eee;
}
.bread > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
  background-color: #fff;
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