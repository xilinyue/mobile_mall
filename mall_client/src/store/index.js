import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cartItems: []
    },
    mutations: {
        addToCart(state,good){
            let flag = false;  //购物城中没有
            // 判断有没有
            state.cartItems.forEach(item => {
                if (item.iid === good.iid){
                    flag = true;
                    item.num += 1;
                }
            });
            if (!flag){
                good['num'] = 1;
                state.cartItems.push(good);
            }
            // 存储到本地
            // localStorage.setItem("cartItems",state.cartItems.toString());
        },
        deleteCartByIid(store,iids){
            // 通过iids数组来删除购物车中的内容
        }
    }
});

export default store;