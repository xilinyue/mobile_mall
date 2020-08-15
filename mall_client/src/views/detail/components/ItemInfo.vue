<template>
    <div class="itemInfo">
        <div class="top">
            <div class="price">
                <div class="currency">{{itemInfo.currency}}</div>
                <div class="price">
                    <span class="now_price">{{itemInfo.nowPrice}}</span>
                    <span  v-if="itemInfo.highNowPrice">~</span>
                    <span class="high_now_price" v-if="itemInfo.highNowPrice">{{itemInfo.highNowPrice}}</span>
                </div>
                <div class="discount">
                    <div class="olg_price" v-if="itemInfo.oldPrice">{{itemInfo.oldPrice}}</div>
                    <div class="price_text" v-if="itemInfo.priceText"><span>{{itemInfo.priceText}}</span></div>
                </div>
            </div>
            <div class="title">{{itemInfo.title}}</div>
            <div class="columns">
                <span v-for="(item,index) in itemInfo.columns" :key="index">{{item.desc}}</span>
            </div>
        </div>
        <div class="services">
            <span v-for="(item,index) in itemInfo.services" :key="index">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemInfo",
        props: {
            itemInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .itemInfo{
        width: 100%;
        height: 100%;
        position: relative;
        .top{
            width: 100%;
            padding: 10px;
            >.price{
                width: 100%;
                display: flex;
                div{
                    margin: 3px;
                }
                .currency{
                    width: 10px;
                    font-size: 14px;
                    font-weight: 400;
                }
                .price{
                    span{
                        font-size: 24px;
                        font-weight: bold;
                    }
                }
                .discount{
                    flex: 1;
                    .olg_price{
                        text-decoration: line-through;
                        color: #ccc;
                    }
                    .price_text{
                        span{
                            padding: 4px;
                            border-radius: 2px;
                            font-size: 12px;
                            color: #FF2255;
                            background-color: #FFE8EE;
                        }
                    }
                }
            }
            .title{
                font-size: 16px;
                color: #000;
            }
            .columns{
                display: flex;
                justify-content: space-between;
            }
        }
        .services{
            display: flex;
            justify-content: space-around;
            padding-top: 15px;
            background-color: rgba(100,100,100,.1);
            span{
                background-color: #fff;
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>