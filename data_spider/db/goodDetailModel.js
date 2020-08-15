const mongoose = require('mongoose');

let Schema = mongoose.Schema;


/** 
    topImages
    itemInfo: title标题 desc描述
    priceInfo：currency highNowPrice nowPrice oldPrice priceTags(bgColor text textColor)
    itemServices：columns,services
    shopInfo: cGoods(在架商品) levels（星级）shopLogo name shopLabels
    itemParams: info rule
    detailImage: desc key list: []
    rateInfo(评价)： rateTags list
    recommend: list
 */
let goodDetailSchema = new Schema({
    iid: {type: String, required: false},
    topImages: {type: Array, required: false},
    itemInfo: {
        title: {type: String, required: false},
        desc: {type: String, required: false}
    },
    recommend: {type: Array, required: false},
    priceInfo: Schema.Types.Mixed,
    itemServices: Schema.Types.Mixed,
    shopInfo: Schema.Types.Mixed,
    itemParams: Schema.Types.Mixed,
    detailInfo: Schema.Types.Mixed,
    rateInfo: Schema.Types.Mixed
});

let goodDetailModel = mongoose.model("goodDetail", goodDetailSchema);

// goodDetailModel.create({
//         info: {
//             a: "fdsaf",
//             b: 'dsafd'
//         },
//         rules: {
//             sda: "fdsaf",
//             tables: [12,123,123,"2321"]
//         },
//         b: [123,123,123]
// });
// let good = new goodDetailModel;
// good.itemParams = {
//             info: {
//                 a: "fdsaf",
//                 b: 'dsafd'
//             },
//             rules: {
//                 sda: "fdsaf",
//                 tables: [12,123,123,"2321"]
//             },
//         };
// good.markModified('itemParams');
// good.save();

module.exports = goodDetailModel;