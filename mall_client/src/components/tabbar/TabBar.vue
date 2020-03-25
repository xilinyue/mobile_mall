<template>
    <div class="tab-bar">
        <TabBarItem path="/home">
            <template v-slot:item-icon>
                <span class="iconfont icon-home-fill"></span>
            </template>
            <template v-slot:item-msg>
                <p>首页</p>
            </template>
        </TabBarItem>
        <TabBarItem path="/category">
            <template v-slot:item-icon>
                <span class="iconfont icon-all-fill"></span>
            </template>
            <template v-slot:item-msg>
                <p>分类</p>
            </template>
        </TabBarItem>
        <TabBarItem path="/market">
            <template v-slot:item-icon>
                <span class="iconfont icon-cart-Empty-fill"></span>
            </template>
            <template v-slot:item-msg>
                <p>购物车</p>
            </template>
        </TabBarItem>
        <TabBarItem path="/profile">
            <template v-slot:item-icon>
                <span class="iconfont icon-bussiness-man-fill"></span>
            </template>
            <template v-slot:item-msg>
                <p>我的</p>
            </template>
        </TabBarItem>
    </div>
</template>
<script>
    import TabBarItem from "./TabBarItem";
    export default {
        name: 'TabBar',
        components: {
            TabBarItem
        }
    }
</script>
<style lang="less" scoped>
    .tab-bar{
        display: flex;
        position: fixed;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f8f8f8;
        box-shadow: 0 -2px 1px rgba(200,100,100,0.3);
    }
</style>
