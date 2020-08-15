<template>
    <div class="goods-item" @click="itemClick">
        <img :src="good.img" alt="good.title" @load="imageLoad">
        <div class="good-info">
            <p class="title">{{good.title}}</p>
            <span class="price fl">￥{{good.price}}</span>
            <span class="collect fr">{{good.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props: {
            good: {
                type: Object,
                default: {}
            }
        },
        methods: {
            imageLoad() {
                this.$bus.$emit("imageLoad");
            },
            itemClick() {
                this.$router.push("/detail/" + this.good.iid);
            }
        }
    }
</script>

<style scoped lang="less">
    .goods-item{
        width: 48%;
        padding: 2px;
        cursor: pointer;
        img{
            width: 100%;
            border-radius: 3px;
        }
        .good-info{
            .title{
                height: 20px;
                line-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .price{
                color: var(--color-hight-text);
                margin-left: 7px;
            }
            .collect{
                margin-right: 7px;
            }
        }
    }
</style>