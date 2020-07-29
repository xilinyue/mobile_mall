<template>
    <div class="goods-list">
        <goods-item v-for="(item,index) in goodsList" :key="index" :good="item"></goods-item>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";
    export default {
        name: "GoodsList",
        components: {
            GoodsItem
        },
        props: {
            goodsList: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped lang="less">
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>