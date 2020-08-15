const mongoose = require('mongoose');

let Schema = mongoose.Schema;

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

module.exports = goodDetailModel;