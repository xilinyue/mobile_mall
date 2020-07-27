import request from './index';

export default {
    getHomeMultiData() {
        return request.get("/home/multiData");
    }
}
