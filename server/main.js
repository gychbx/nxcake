const express=require('express');
const app=express();
const cakecontroller=require('./controllers/cakecontroller');
const shoppingcontroller=require('./controllers/shoppingcontroller');
//解决跨域
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
//cookie
var cookieParser = require('cookie-parser');  
app.use(cookieParser());
//获取蛋糕信息
app.post('/getcakeinfo',cakecontroller.getCakeInfo);
//获取土司信息
app.post('/getbreadinfo',cakecontroller.getBreadInfo);
//获取礼品信息
app.post('/getgiftinfo',cakecontroller.getGiftInfo);
//获取首页图片信息
app.get('/gethomeinfo',cakecontroller.getHomeInfo);
//关键字搜索cake图片
app.post('/searchinfo',cakecontroller.getKeywordInfo);
//导航栏关键字搜索cake图片
app.get('/navsearch',cakecontroller.getNavKeyWordData);
//加入购物车
app.post('/addtoshopping',shoppingcontroller.addShopping);
//获取购物车信息
app.post('/getshoppingcar',shoppingcontroller.getShoppingCar);
//更新购物车件数
app.post('/updatepiece',shoppingcontroller.updateMyShopping);
//按sid删除购物车商品
app.post('/delshopping',shoppingcontroller.delMyShopping);
//删除购物车所有商品
app.post('/delallshopping',shoppingcontroller.delMyAllShopping);
//端口监听
app.listen(81,function(){
    console.log('服务器启动成功')
});