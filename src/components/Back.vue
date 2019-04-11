<template>
<div>
    <div class="wrap">
        <div class="global_nav">
            <div style="width:216px">
                <img src="../../static/logo_new.png" alt="">
            </div>
            <p style="font-size: 18px;line-height: 20px;">找回密码</p>
        </div>
    </div>
    <div class="main">
        <div  style="margin-bottom: 80px;display:flex;justify-content: center;">
            <el-steps  :active="1"  align-center>
                <el-step title="填写账号" ></el-step>
                <el-step title="选择找回方式"></el-step>
                <el-step title="验证身份" ></el-step>
                <el-step title="重置密码"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
        </div>
        <div style=" text-align: center">
            <p style="text-align: center;color: #949494;font-size:12px;margin-bottom:24px">提示：忘记用户名？试试您的常用邮箱或手机号，如依然无法解决，请咨询客服：4001-578-578</p>
            <input type="text" class="input" maxlength="50" id="userName" @focus="focus" v-model="id" placeholder="用户名/手机号/邮箱" data-error="请输入用户名">
            <div style="height:24px;width:250px;margin:0 auto;text-align: left;text-indent: 24px;font-size: 12px;color: #ff0000;line-height: 24px;">{{user}}</div >
            <slider style="width:250px;margin:0 auto" @asd="change"></slider>
            <button class="btn" @click="click">下一步</button>
        </div>
    </div>
</div>
</template>

<script>
import Slider from "./Slider"
    export default {
        name:"Back",
          components:{
            "slider":Slider,
        },
        data(){
            return {
                id:"",
                user:"",
                user1:"*请输入用户名",
                user2:"*请拖动滑块完成验证",
                user3:""
            }
        },
        methods:{
            click: function(){
                if(this.id==""){
                    this.user=this.user1
                }else if(true){
                    this.user=this.user2
                }
            },
            focus: function(){
                this.user=this.user3
            },
            change:function(e){
                console.log(e)
                this.user=this.user3
            }
        }
    }  
</script>

<style scoped>
    .wrap {
        widows: 100%;
        height: 83px;
        border-bottom: 1px solid #e5e5e5;
        
    }
    .global_nav {
        width: 62.5%;
        margin: 0 auto;
        padding: 29px 0;
       
        display: flex;
    }
    .main {
        padding: 60px 0 40px;
    }
    .input {
        border: none;
        outline: none;
         line-height: 20px;
        padding: 4px 0 5px 24px;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
        background: url(../../static/teltwo.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .btn {
        margin-top: 60px;
        border: none;
        outline: none;
        width: 250px;
        height: 50px;
        line-height: 50px;
        background: #fe4320;
        color: #ffffff;
        font-size: 16px;
    }
    .el-step {
        width: 150px;
  
        height: 20px
    }
    
</style>