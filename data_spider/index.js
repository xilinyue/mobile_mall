const request = require("request");

const mongoose = require("./db/index");
const goodsModel = require("./db/goodsModel");

// 定义获取单页数据
function getSingleData(url) {
    request.get(url,(error, response,body) => {
        if(error) {
            console.log(error);
            return true;
        }
        let result = JSON.parse(body.slice(11,-2));
        let goodsList = result.result.wall.docs;
        // 存入数据库
        for (let i = 0; i < goodsList.length; i++){
            let goodsItem = {
                title: goodsList[i].title,
                cfav: goodsList[i].cfav,
                clientUrl: goodsList[i].clientUrl,
                img: goodsList[i].img,
                orgPrice: goodsList[i].orgPrice,
                price: goodsList[i].price,
                type: Math.floor(Math.random() * 3)
            };
            // 存储
            goodsModel.create(goodsItem).then(doc => {
                console.log(doc);
            }).catch(err => {
                console.log(err);
            })
        }
    }) 
}

for(let i = 1; i <= 10; i++){
    let url = "https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=new&page="+i+"&q=%25E5%25A5%25B3%25E8%25A3%2585&minPrice=&maxPrice=&ppath=&cpc_offset=0&ptp=32._mf1_1239_4537.0.0.u5jS80mo&acm=3.mce.1_10_1p9dk.140653.0.yd34ns65XfkGX.pos_2-m_589248-sd_119-mf_4537_1211938-idx_1-mfs_15-dm1_5000&offset=&_=1595991643495&callback=jsonp3";
    getSingleData(url);
}