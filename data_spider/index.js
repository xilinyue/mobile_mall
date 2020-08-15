const request = require("request");
const z = require('./util');

const mongoose = require("./db/index");
const goodsModel = require("./db/goodsModel");
const goodDetailModel = require("./db/goodDetailModel");


let headers = {
    "referer": "https://h5.mogu.com/detail-normal/index.html?itemId=1mv25sa&acm=3.ms.1_4_1mv25sa.46.36616-93871-68998.rJ18Ns7I9fXa8.sd_117-swt_46-imt_6-c_1_17_583338716_0_0_3-t_rJ18Ns7I9fXa8-lc_17-pit_1-qid_90128-dit_-idx_31-dm1_5001&cparam=MTU5NzQ3MTg5MV8xMWtfN2ZhNGIzYWY1MzVjNGRmOTc2ZDYzNzg2MjgyM2VkNjFfMTdfMF81ODMzMzg3MTZfNGY4Zl8wXzBfMF82OF8xXzNfbG9jLTA=&ptp=32.rPCjb.undefined.32.FrVyweC6",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    "cookie": "__mgjuuid=36234043-8e9e-401a-94d6-9aaed546adda; _mwp_h5_token_enc=13689c0e584393cf810fa3542016fd84; _mwp_h5_token=f89bea47ffc252a11386b0a2a23e41a6_1597407400132" 
}

// 定义获取单页数据
function getSingleData(url) {
    request.get(url,(error, response,body) => {
        if(error) {
            console.log(error);
            return true;
        }
        let result = JSON.parse(body.slice(11,-2));
        //获取到了每一页的40条不同商品数据
        let goodsList = result.result.wall.docs;
        // 存入数据库
        for (let i = 0; i < goodsList.length; i++){
            /**
             * 这里需要取到iid 然后拼接地址获取数据
             * 1.商品详情
             *      https://api.mogu.com/h5/http.detail.api/1/?data=%7B%22appPlat%22%3A%22m%22%2C%22sourceParams%22%3A%22%22%2C%22template%22%3A%221-2-detail_normal-1.0.0%22%2C%22iid%22%3A%221msk8xq%22%2C%22activityId%22%3A%22%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1597414892312&mw-uuid=36234043-8e9e-401a-94d6-9aaed546adda&mw-h5-os=iOS&mw-sign=0cb19be25fd827875b1d90cf8b895982&callback=mwpCb1&_=1597414892314 
             * 2.推荐数据获取
             *      https://api.mogu.com/h5/mwp.darwin.get/3/?data=%7B%22appPlat%22%3A%22m%22%2C%22plat%22%3A%22h5%22%2C%22pageSize%22%3A12%2C%22pid%22%3A%225018%22%2C%22iidE%22%3A%221msk8xq%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1597414892524&mw-uuid=36234043-8e9e-401a-94d6-9aaed546adda&mw-h5-os=iOS&mw-sign=904a37c34b3d3e34428adf46cfeac956&callback=mwpCb3&_=1597414892525
             */
            // 首先获取iid
            let iid = goodsList[i].iid;
            // 详情数据url
            let url1  = calUrl1(iid);
            // 推荐列表url
            let url2 = calUrl2(iid);
            let goodsItem = {
                iid: iid,
                title: goodsList[i].title,
                cfav: goodsList[i].cfav,
                clientUrl: goodsList[i].clientUrl,
                img: goodsList[i].img,
                orgPrice: goodsList[i].orgPrice,
                price: goodsList[i].price,
                type: Math.floor(Math.random() * 3)
            };
            getGoodDetail(iid,url1,url2);
            // 存储第一层数据
            goodsModel.create(goodsItem).then(doc => {
                //存储详情数据
                // console.log(item);
                // let goodDetail = new goodDetailModel;
                // goodDetail.iid = iid;
                // goodDetail.topImages = item.topImages;
                // goodDetail.itemInfo = item.itemInfo;
                // goodDetail.recommend = item.recommend;
                // goodDetail.priceInfo = item.priceInfo; //1
                // goodDetail.itemServices = item.itemServices; //2
                // goodDetail.shopInfo = item.shopInfo; //3
                // goodDetail.itemParams = item.itemParams; //4
                // goodDetail.detailInfo = item.detailInfo; //5
                // goodDetail.rateInfo = item.rateInfo; //6
                // goodDetail.markModified('priceInfo');
                // goodDetail.markModified('itemServices');
                // goodDetail.markModified('shopInfo');
                // goodDetail.markModified('itemParams');
                // goodDetail.markModified('detailInfo');
                // goodDetail.markModified('rateInfo');
                // goodDetail.save();
            }).catch(err => {
                console.log(err);
            });
        }
    }) 
}

for(let i = 1; i <= 10; i++){
    let url = "https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=pop&page="+i+"&q=%25E5%25A5%25B3%25E8%25A3%2585&minPrice=&maxPrice=&ppath=&cpc_offset=&ptp=32._mf1_1239_4537.0.0.S3vpT8Mx&acm=3.mce.1_10_1p9dm.140653.0.9Wl50s7DMSybg.pos_3-m_589249-sd_119-mf_4537_1211938-idx_1-mfs_15-dm1_5000&_=1597424477888&callback=jsonp1";
    console.log(i);
    getSingleData(url);
}

// 调用测试
// 根据iid生成mw-sign
// 第一次调用
// let iid = "1mv25sa";
// let fir = z('{"appPlat":"m","sourceParams":"","template":"1-2-detail_normal-1.0.0","iid":"'+iid+'","activityId":""}');
// let sec = z('{"appPlat":"m","plat":"h5","pageSize":12,"pid":"5018","iidE":"'+iid+'"}');
// let timeString = String(Date.now());
// let mw_sign1 = z("100028&iOS&"+ timeString +"&NMMain@mgj_h5_1.0&36234043-8e9e-401a-94d6-9aaed546adda&http.detail.api&1&"+ fir +"&f89bea47ffc252a11386b0a2a23e41a6_1597407400132")
// let url1 = "https://api.mogu.com/h5/http.detail.api/1/?data=%7B%22appPlat%22%3A%22m%22%2C%22sourceParams%22%3A%22%22%2C%22template%22%3A%221-2-detail_normal-1.0.0%22%2C%22iid%22%3A%22"+iid+"%22%2C%22activityId%22%3A%22%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t="+timeString+"&mw-uuid=36234043-8e9e-401a-94d6-9aaed546adda&mw-h5-os=iOS&mw-sign=" +mw_sign1+"&callback=mwpCb1&_=1597476573573";
// let mw_sign2 = z("100028&iOS&"+ timeString +"&NMMain@mgj_h5_1.0&36234043-8e9e-401a-94d6-9aaed546adda&mwp.darwin.get&3&"+ sec +"&f89bea47ffc252a11386b0a2a23e41a6_1597407400132")
// let url2 = "https://api.mogu.com/h5/mwp.darwin.get/3/?data=%7B%22appPlat%22%3A%22m%22%2C%22plat%22%3A%22h5%22%2C%22pageSize%22%3A12%2C%22pid%22%3A%225018%22%2C%22iidE%22%3A%22"+ iid +"%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t="+timeString+"&mw-uuid=36234043-8e9e-401a-94d6-9aaed546adda&mw-h5-os=iOS&mw-sign="+mw_sign2+"&callback=mwpCb3&_=1597414892525";
// getGoodDetail(iid,url1,url2);

function calUrl1(iid) {
    let fir = z('{"appPlat":"m","sourceParams":"","template":"1-2-detail_normal-1.0.0","iid":"'+iid+'","activityId":""}');
    let timeString = String(Date.now());
    let mw_sign1 = z("100028&iOS&"+ timeString +"&NMMain@mgj_h5_1.0&36234043-8e9e-401a-94d6-9aaed546adda&http.detail.api&1&"+ fir +"&f89bea47ffc252a11386b0a2a23e41a6_1597407400132");
    let url1 = "https://api.mogu.com/h5/http.detail.api/1/?data=%7B%22appPlat%22%3A%22m%22%2C%22sourceParams%22%3A%22%22%2C%22template%22%3A%221-2-detail_normal-1.0.0%22%2C%22iid%22%3A%22"+iid+"%22%2C%22activityId%22%3A%22%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t="+timeString+"&mw-uuid=36234043-8e9e-401a-94d6-9aaed546adda&mw-h5-os=iOS&mw-sign=" +mw_sign1+"&callback=mwpCb1&_=1597476573573";
    return url1;
}
function calUrl2(iid) {
    let sec = z('{"appPlat":"m","plat":"h5","pageSize":12,"pid":"5018","iidE":"'+iid+'"}');
    let timeString = String(Date.now());
    let mw_sign2 = z("100028&iOS&"+ timeString +"&NMMain@mgj_h5_1.0&36234043-8e9e-401a-94d6-9aaed546adda&mwp.darwin.get&3&"+ sec +"&f89bea47ffc252a11386b0a2a23e41a6_1597407400132")
    let url2 = "https://api.mogu.com/h5/mwp.darwin.get/3/?data=%7B%22appPlat%22%3A%22m%22%2C%22plat%22%3A%22h5%22%2C%22pageSize%22%3A12%2C%22pid%22%3A%225018%22%2C%22iidE%22%3A%22"+ iid +"%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t="+timeString+"&mw-uuid=36234043-8e9e-401a-94d6-9aaed546adda&mw-h5-os=iOS&mw-sign="+mw_sign2+"&callback=mwpCb3&_=1597414892525";
    return url2;
}

function getGoodDetail(iid,url1,url2){
    // console.log(url1,url2);
    request({
        method: "GET",
        url: url1,
        headers
    },(err,response,body) => {
        if(err){
            console.log(err);
            return true;
        }
        // console.log(body);
        let result = JSON.parse(body.slice(7,-1));
        let data = result.data.result;
        let detail = {
            topImages: data.topImages,
            itemInfo: {
                title: data.itemInfo.title,
                desc: data.itemInfo.desc
            },
            priceInfo: {
                currency: data.priceInfo.currency,
                highNowPrice: data.priceInfo.highNowPrice,
                nowPrice: data.priceInfo.nowPrice,
                oldPrice: data.priceInfo.oldPrice,
                priceTags: data.priceInfo.priceTags[0]
            },
            itemServices: data.itemServices,
            shopInfo: {
                cGoods: data.shopInfo.cGoods,
                level: data.shopInfo.level,
                name: data.shopInfo.name,
                shopLogo: data.shopInfo.shopLogo,
                shopLabels: data.shopInfo.shopLabels
            },
            itemParams: data.itemParams,
            detailInfo: {
                desc: data.detailInfo.desc,
                detailImage: data.detailInfo
            },
            rateInfo: {
                list: data.rateInfo.list,
                rateTags: data.rateInfo.rateTags
            }
        };
        request({
            method: "GET",
            url: url2,
            headers
        },(err,response,body) => {
            if(err){
                console.log(err);
                return true;
            }
            let result = JSON.parse(body.slice(7,-1));
            detail['recommend'] = result.data.list;

            // // 存储
            let goodDetail = new goodDetailModel;
            goodDetail.iid = iid;
            goodDetail.topImages = detail.topImages;
            goodDetail.itemInfo = detail.itemInfo;
            goodDetail.recommend = detail.recommend;
            goodDetail.priceInfo = detail.priceInfo; //1
            goodDetail.itemServices = detail.itemServices; //2
            goodDetail.shopInfo = detail.shopInfo; //3
            goodDetail.itemParams = detail.itemParams; //4
            goodDetail.detailInfo = detail.detailInfo; //5
            goodDetail.rateInfo = detail.rateInfo; //6
            goodDetail.markModified('priceInfo');
            goodDetail.markModified('itemServices');
            goodDetail.markModified('shopInfo');
            goodDetail.markModified('itemParams');
            goodDetail.markModified('detailInfo');
            goodDetail.markModified('rateInfo');
            goodDetail.save();
            
            // console.log(detail);
            // return detail;
        })
    });
}