<template>
    <div class="recommend">
        <div class="recommend_item" v-for="(item,index) in recommendList" :key="index">
            <img :src="item.image" alt="">
            <div class="title">{{item.title}}</div>
            <div class="price">￥{{item.discountPrice}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailRecommend",
        props: {
            recommendList: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .recommend{
        width: 100%;
        padding-top: 15px;
        padding-bottom: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #fff;
        .recommend_item{
            width: 32%;
            img{
                width: 100%;
            }
            .title{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>