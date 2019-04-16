const servicecake=require('../service/servicecake.js');
//获取蛋糕信息
var getCakeInfo=function(req,res){
    servicecake.selectCakeInfo(function(results){
            res.json(results);
    })
}
var getBreadInfo=function(req,res){
    servicecake.selectBreadInfo(function(results){
            res.json(results);
    })
}
var getGiftInfo=function(req,res){
    servicecake.selectGiftInfo(function(results){
            res.json(results);
    })
}
var getHomeInfo=function(req,res){
    var type=req.query.type;
    var piece=req.query.piece;
    servicecake.selectHomeInfo(type,piece,function(results){
            res.json(results);
    })
}
var getKeywordInfo=function(req,res){
    var keyword1=req.body.keyword1;
    var keyword2=req.body.keyword2;
    servicecake.keywordSearch(keyword1,keyword2,function(results){
        res.json(results);
    })
}
//导航栏cake关键字查询
var getNavKeyWordData=function(req,res){
            var searchdata= req.query.searchdata;
            servicecake.navKeywordSearch(searchdata,function(results){
                        res.json(results);
            })
}

exports.getCakeInfo=getCakeInfo;
exports.getBreadInfo=getBreadInfo;
exports.getGiftInfo=getGiftInfo;
exports.getHomeInfo=getHomeInfo;
exports.getKeywordInfo=getKeywordInfo;
exports.getNavKeyWordData=getNavKeyWordData;
