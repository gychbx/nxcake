const dbutils=require('../utils/dbutils.js');
//获取cake图片显示数据
function selectCakeData(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select cid,imgurl,test,scale,pname,lable,price,type from cake where type=1'
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//获取bread图片显示数据
function selectBreadData(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select cid,imgurl,test,scale,pname,lable,price,type from cake where type=2'
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//获取gift图片显示数据
function selectGiftData(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select cid,imgurl,test,scale,pname,lable,price,type from cake where type=3'
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//根据type,piece值获取首页图片数据
function selectHomeData(type,piece,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select cid,imgurl,test,scale,pname,lable,price,type from cake where type=? limit 0,'+piece
            conn.query(sql,[type],(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//按cake关键字查询
function selectByKeyword(keyword1,keyword2,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql=0;
            if(keyword1==='全部'&&keyword2==='全部'){
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1';
            }else if(keyword1==="全部"){
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and scale="'+keyword2+'"';
            }else if(keyword2==="全部"){
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and test="'+keyword1+'"';
            }else{
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and test="'+keyword1+'" and scale="'+keyword2+'"';
            }
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//导航栏按关键字搜索
function navSearch(searchdata,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and (pname like "%'+searchdata+'%" or test like "%'+searchdata+'%")'
            conn.query(sql,[searchdata],(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}

exports.selectCakeData=selectCakeData;
exports.selectBreadData=selectBreadData;
exports.selectGiftData=selectGiftData;
exports.selectHomeData=selectHomeData;
exports.selectByKeyword=selectByKeyword;
exports.navSearch=navSearch;


