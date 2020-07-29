import request from './index';

export default {
    getHomeMultiData() {
        return request.get("/home/multiData");
    },
    getHomeGoods(data){
        return request.get("/api/goods/getHomeGoodsList",{params: data});
    }
}
