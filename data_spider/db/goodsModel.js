const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let goodsSchema = new Schema({
    iid: {type: String, required: true},
    title: {type: String, required: true},  // 标题
    cfav: {type: Number, required: true},  // 收藏数
    clientUrl: {type: String, required: true},  // 详情地址
    img: {type: String, required: true},  //图片地址
    orgPrice: {type: Number, required: true}, //原始价格
    price: {type: Number, required: true},  // 价格
    type: {type: Number, required: true}   //类型 0流行,1新款,2精选
});

let goodsModel = mongoose.model("good", goodsSchema);

// goodsModel.create({
//         title: '123',
//         cfav: 12,
//         clientUrl: '1231',
//         img: '12312',
//         orgPrice: 12312,
//         price: 12312,
//         type: 1
//     }).then(doc => {
//         console.log(doc);
//     })

module.exports = goodsModel;