const express = require("express");
const goodsModel = require("../db/goodsModel");

let router = express.Router();

// 懒加载商品数据
router.get("/getHomeGoodsList",(req,res) => {
    let page = req.query.page;
    let type = req.query.type;
    goodsModel.find({type},{__v: 0}, {skip: (page-1)*10, limit: 10}).then(docs => {
        if(docs.length = 10){
            res.send({
                code: 0,
                message: "数据获取成功",
                data: docs
            });
        }else{
            res.send({
                code: 3,
                message: "数据获取成功",
                data: docs
            });
        }
    }).catch(err => {
        res.send({
            code: 5,
            message: '服务器错误',
            data: null
        })
    });
});

module.exports = router;