<template>
    <div>
        <div class="wrap">
            <div class="main_width clear_fix">
                <img src="../../static/logo_new.png" alt="" class="pic">
            </div>
        </div>
        <div class="main">
            <div class="banner_link">
                <div class="login_wrap">
                    <div class="clear_fix tab_title">
                        <div class="f_left" @click="click"  data-id="1" :style="[ac==1&&ab==1?mystyle:'']">{{f_left}}</div>
                        <div class="f_right">
                            <span>|</span>
                            <span @click="click" data-id="2" :style="[ac==2?mystyle:'']"  v-html="f_right"></span>
                        </div>
                    </div>
                    <div class="tab_mobile" v-if="ac==1">
                        <p class="input_wrap username_wrap">
                            <input type="text" maxlength="11" title="手机号码" class="phone"  @focus="change" v-model="telphone" placeholder="手机号码">
                            <span class="error_message" >{{tel}}</span>
                        </p>
                        <p class="input_wrap yzm_wrap" v-if="huakuai">
                            <input type="text" maxlength="6" class="yzm" title="验证码"  @focus="change" v-model="yanzhengma" placeholder="请输入验证码">
                            <img src="https://www.lecake.com/customer/captcha.html?w=80&h=30&offset=2&v=0.33357310319231614" alt=""> 
                            <span>换一个</span> 
                            <span class="error_message" >{{yzm}}</span>
                        </p>

                        <div style="height:56px" v-else>
                            <slider></slider>
                            <span class="error_message">{{q}}</span>
                        </div>
                         <p class="input_wrap yzm_wrap">
                            <input type="text" maxlength="6" title="短信验证码" @focus="change" v-model="dxyzm"  placeholder="短信验证码">
                            <!-- <button class="code_btn"  @click="yanzheng">{{count}}</button> -->

                            <button v-show="show" class="code_btn"  @click="yanzheng">获取验证码</button>
                            <button v-show="!show" class="code_btn count" disabled >{{count}} s后重试</button>
    
                            <span class="error_message" >{{duanxin}}</span>
                        </p>
                    </div>

                    <div class="tab tab_account" v-else>
                        <p class="input_wrap username_wrap">
                            <input type="text" maxlength="50" title="email/手机号" v-model="usename"  @focus="change" placeholder="请输入账号" autocomplete="off">
                            <span class="error_message" >{{id}}</span>
                        </p>
                        <p class="input_wrap password_wrap">
                            <input type="password" maxlength="50" title="密码"  v-model="password"  @focus="change" placeholder="请输入密码">
                            <span class="error_message" >{{pwd}}</span>
                        </p>
                    </div>


                    <button class="btn" @click="login">立即登录</button>


                    <div v-if="huakuai">
                        <div class="clear_fix bottom_link" >
                            <router-link   class="link_1"   to="/forget">忘记密码</router-link>
                            <div>
                                <span>还没有账号？</span>
                                <span class="link_2" @click="reg">立即注册</span>
                            </div>
                        </div>

                        <div class="more_login_type">
                            <div>-------其他登录方式-------</div>
                        </div>
                        <div class="type_list">
                            <img src="../../static/weixin.png" alt="">
                            <img src="../../static/qq.png" alt="">
                        </div>
                    </div>

                    <p class="clear_fix bottom_link two" v-else>
                        <input type="checkbox" id="rule" v-model="a">
                        <label for="rule">我已阅读并同意<a href="/shop/help-41.html" target="_blank">《诺心lecake用户服务协议》</a></label>
                        <span class="error_message" v-if="!a">用户服务协议未勾选</span>
                    </p>
                </div>

                
                
            </div>
        </div>
    </div>


</template>

<script>
import Slider from "./Slider"
import { constants } from 'os';
	export default {
        name:"Reg",
        components:{
            "slider":Slider,
        },
        data(){
            return {
                key:true,
                a:true,
                q:"",
                q1:"请拖动滑块完成验证",
                q2:"",
                f_left:"手机验证登录",
                f_left1:"手机快捷注册",
                f_left2:"手机验证登录",
                
                f_right:"账户密码登录",
                f_right1:"已有账号？<i style='color: #fe4320;font-style: normal' data-id='10'>请登录</i>",
                f_right2:"账户密码登录",

                show: true,
                ac:1,
                ab:1,
                w:false,

                telphone:"",
                yanzhengma:"",
                dxyzm:"",

                tel:"",
                tel1:"手机号码不能为空",
                tel2:"手机号码格式不正确",
                tel3:"",

                yzm:"",
                yzm1:"验证码不能为空",
                yzm2:"",
                
                duanxin:"",
                duanxin1:"请输入短信验证码",
                duanxin2:"",
                
                usename:"",
                password:"",
                id:"",
                id1:"用户名不能为空",
                id2:"用户名格式不正确",
                id3:"",

                pwd:"",    
                pwd1:"密码不能为空",
                pwd2:"",
                
                timer:null,
                count:"",

                huakuai:true,

                mystyle2: {
                    color:"black"
                },
                mystyle :{
                    color: "#fe4320"
                }
            }
        },
        methods: {
            click: function(e){
                if(e.srcElement.dataset.id==10){
                    this.key=true
                    this.huakuai=true
                    this.f_right=this.f_right2
                     this.f_left=this.f_left2
                    if(this.ac==1){
                        this.ac=1
                        this.ab=1
                    }else if(this.ac==2){
                        this.ac=2
                        this.ab=1
                    }         
                }
                if(this.key){
                    if(e.srcElement.dataset.id==1){
                        this.ac=e.srcElement.dataset.id
                    }else if(e.srcElement.dataset.id==2) {
                        this.ac=e.srcElement.dataset.id
                    }
                }
                console.log(e.srcElement.dataset.id)
                
               
            },
            yanzheng: function () {
                if(this.telphone==""){
                    this.tel=this.tel1
                    return; 
                }else if(!(/^1[34578]\d{9}$/.test(this.telphone))){ 
                    this.tel=this.tel2 
                    return; 
                }

                if(this.w==false){
                    this.q=this.q1
                    return ;
                }

                if(this.yanzhengma==""){
                    this.yzm=this.yzm1;
                  
                }else if(this.yanzhengma!="zzzz"){
                    alert("验证码错误，请重新输入")
                    this.yanzhengma="";
                  
                }else if(this.yanzhengma=="zzzz"){
                    //发送验证码
                      this.getCode()
                }
                

               

                
            },
            getCode(){
                 const TIME_COUNT = 120;
                 if (!this.timer) {
                   this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                     this.count--;
                    } else {
                        this.show = true;
                     clearInterval(this.timer);
                     this.timer = null;
                    }
                   }, 1000)
                  }
             },
            login: function(){
                if(this.ac==1){
                        if(this.telphone==""){
                            this.tel=this.tel1
                            return ;
                        }else if(!(/^1[34578]\d{9}$/.test(this.telphone))){ 
                            this.tel=this.tel2 
                            return ; 
                        }else if(this.dxyzm==""){
                            this.duanxin=this.duanxin1
                            return ;
                        }else if(this.dxyzm!="zzzz"){
                            alert("手机验证码错误")
                            return ;
                        }else {
                             //跳转
                        }
                }else if(this.ac==2){
                    if(this.usename==""){
                            this.id=this.id1
                            return ;
                        }else if(!(/^1[34578]\d{9}$/.test(this.usename))){ 
                            this.id=this.id2 
                            return ; 
                        }else if(this.password==""){
                            this.pwd=this.pwd1
                            return ;
                        }else if(!(/^[0-9A-Za-z]{6,20}$/.test(this.password))){
                            alert("密码只能是6-30位英文、数字及“_”、“-”组成")
                            return ;
                        }else {
                            //跳转
                        }
                }
              
            },
            change: function(){
                this.tel=this.tel3;
                this.yzm=this.yzm2;
                this.duanxin=this.duanxin2;
                this.id=this.id3;
                this.pwd=this.pwd2;
            },
            reg: function(){
                this.f_left=this.f_left1
                this.f_right=this.f_right1
                this.huakuai=false
                this.key=false
                this.ac=1
                this.ab=2
                this.telphone="",
                this.yanzhengma="",
                this.dxyzm=""
                
            }
         
        }
	}
</script>

<style scoped>
	.wrap {
        width: 100%;
        height: 83px;
        border-bottom: 1px solid #e5e5e5;
        
    }
    .main_width  {
        padding: 29px 0;
        width: 62.5%;
        margin: 0 auto;
        height: 24px;
    }
    .pic {
        width: 207px;
        height: 24px;
    }
    .main {
        height: 520px;
        width: 100%;
        background: url(../../static/bg.jpg)
    }
    .banner_link {
        width: 46.25%;
        height: 520px;
        margin: 0 auto
    }
    .login_wrap {
        float: right;
        position: relative;
        z-index: 2;
        top: 50px;
        width: 250px;
        padding: 20px 60px;
        background: #ffffff;
        opacity: 0.95;
    }
    .register_wrap {
        float: right;
        position: relative;
        z-index: 2;
        top: 50px;
        width: 250px;
        padding: 20px 60px;
        background: #ffffff;
        opacity: 0.95;
    }
    .tab_title  {
        width: 250px;
        height: 28px;
        margin-bottom: 20px;
        font-size: 14px;
        display: flex
    }
    .tab_title div {
        width: 125px;
        height: 28px;
        line-height: 28px;
    }
    .f_left {
        cursor: pointer;
    }
    .f_right {
        display: flex;
        justify-content: space-between;
    }
    .f_right>span:nth-child(2) {
        cursor: pointer;
    }
    .tab_mobile {
        
    }
    .input_wrap {
        width: 250px;
        height: 30px;
        margin-bottom: 30px;
    }
    .input_wrap input {
        border: none;
        outline: none;
        line-height: 20px;
        padding: 4px 0 5px 24px;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
    }
    .username_wrap input {
        background: url(../../static/teltwo.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .password_wrap input {
        background: url(../../static/xinhao.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .yzm_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .yzm_wrap input {
        width: 128px;
        background: url(../../static/yaoshi.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .yzm_wrap span {
        
        font-size: 12px;
       
    }
    .yzm_wrap> img {
        width: 50px;
        height: 30px;
    }
    .code_btn {
        border: none;
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #fe4320;
        font-size: 12px;
        color: #ffffff;
        cursor: pointer;
    }
    .count {
        background: #FC9F8B;
    }
    .btn {
        border: none;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fe4320;
        color: #ffffff;
        font-size: 16px;
        cursor: pointer;
    }
    .bottom_link {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        color: #949494;
        font-size: 12px;
    }
    .link_1 {
        color: #949494;
        text-decoration: none;
    }
    .link_2 {
        color: #fe4320;
        cursor: pointer;
    }
    .more_login_type {
        margin-top: 20px;
        color: #949494;
        font-size: 12px;
    }
    .more_login_type> div {
        text-align: center;
        height: 20px
    }
    .type_list {
        height: 50px;
        text-align: center;
        padding-top: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .type_list img {
        width: 32px;
        height: 32px;
        line-height: 50px;
    }
    .type_list>img:nth-child(1) {
        margin-right: 15px;
    }
    .error_message {
        text-align: left;
        text-indent: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #ff0000;
        display: inline-block;
        width: 250px;
    }
    .two {
        width: 280px;
        margin-top: 12px;
        justify-content: start;
    }
</style>