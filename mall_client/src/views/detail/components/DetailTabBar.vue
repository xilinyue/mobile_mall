<template>
    <div class="detail_tab_bar">
        <div class="tab">
            <span class="iconfont icon-dianpu"></span>
            <div>店铺</div>
        </div>
        <div class="tab">
            <span class="iconfont icon-kefu"></span>
            <div>客服</div>
        </div>
        <div class="tab">
            <span class="iconfont icon-shoucang"></span>
            <div>收藏</div>
        </div>
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">立即购买</div>
    </div>
</template>

<script>
    export default {
        name: "DetailTabBar",
        methods: {
            addToCart() {
                this.$emit("addToCart");
            }
        }
    }
</script>

<style scoped lang="less">
    .detail_tab_bar{
        position: fixed;
        background-color: #fff;
        bottom: 0;
        left: 0;
        height: 55px;
        width: 100%;
        display: flex;
        box-shadow: 0 0 2px #ccc;
        .tab{
            padding-top: 6px;
            box-sizing: border-box;
            text-align: center;
            width: 70px;
            height: 55px;
            border-right: 1px solid rgba(100,100,100,.1);
        }
        .cart,.buy{
            flex: 1;
            height: 100%;
            text-align: center;
            line-height: 55px;
            font-size: 1rem;
            cursor: pointer;
        }
        .cart{
            background-color: #ffe6e8;
            color: #ff5777;
        }
        .buy{
            background: linear-gradient(90deg,#ff5777,#ff468f);
            color: #fff;
        }
    }
</style>