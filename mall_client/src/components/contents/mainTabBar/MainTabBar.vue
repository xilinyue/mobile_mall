<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home" active-color="deepPink">
                <span slot="item-icon" class="iconfont icon-homepage_fill"></span>
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category" active-color="deepPink">
                <span slot="item-icon" class="iconfont icon-qrcode_fill"></span>
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart" active-color="deepPink">
                <span slot="item-icon" class="iconfont icon-publishgoods_fill"></span>
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile" active-color="deepPink">
                <span slot="item-icon" class="iconfont icon-people_fill"></span>
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "@/components/common/tabbar/TabBar";
    import TabBarItem from "@/components/common/tabbar/TabBarItem";
    export default {
        name: 'MainTabBar',
        components: {
            TabBar, TabBarItem
        }
    }
</script>

<style scoped>

</style>