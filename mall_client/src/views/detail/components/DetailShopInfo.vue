<template>
    <div class="shopInfo">
        <div class="logo" :style="{backgroundImage: 'url('+shopInfo.shopLogo+')'}"></div>
        <div class="info">
            <div class="name">{{shopInfo.name}}</div>
            <div class="info">
                <!--星级评价-->
                <star :num="shopInfo.level"></star>
                <span class="line">|</span>
                <span>在架商品{{shopInfo.cGoods}}</span>
            </div>
            <div class="tags">
                <span v-for="(item,index) in shopInfo.shopLabels" :key="index">{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Star from "../../../components/contents/star/Star";
    export default {
        name: "DetailShopInfo",
        components: {Star},
        props: {
            shopInfo: {
                type: Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .shopInfo{
        width: 100%;
        padding-top: 15px;
        display: flex;
        .logo{
            width: 80px;
            height: 80px;
            margin: 0 15px 15px;
            background-position: center;
            background-size: cover;
        }
        >.info{
            flex: 1;
            .name{
                font-size: 16px;
            }
            .info{
                 span.line{
                     display: inline-block;
                     margin:0 7px;
                 }
             }
            .tags{
                display: flex;
                span{
                    padding: 3px;
                    border-radius: 10px;
                    margin: 3px;
                    border: 1px solid #ccc;
                    color: #ff8198;
                }
            }
        }
    }
</style>