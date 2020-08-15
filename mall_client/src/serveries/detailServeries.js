import request from './index';

export default {
    getGoodDetailByIid(iid) {
        return request.get("/api/goodDetail/getGoodDetailByIid", {params: {iid}});
    }
}

export class DetailItemInfo {
    constructor(title,currency,highNowPrice,nowPrice,oldPrice,priceText,columns,services) {
        this.title = title;
        this.currency = currency;
        this.highNowPrice = highNowPrice;
        this.nowPrice = nowPrice;
        this.oldPrice = oldPrice;
        this.priceText = priceText;
        this.columns = columns;
        this.services = services;

    }
}
