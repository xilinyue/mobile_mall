const express = require('express');
let router = express.Router();
let Banner = require('../models/banner');

router.get('/getAllBanner',(req,res) => {
    Banner.selectAllBanner((err,result) => {
        if(err) {
            res.send({
                code: 5,
                msg: '服务器错误'
            });
        }else{
            res.send({
                code: 0,
                msg: '数据获取成功',
                data: result
            })
        }
    });
})

module.exports = router;