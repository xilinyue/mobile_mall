<template>
    <div class="detail_image" v-if="detailImage">
        <div class="title">{{detailImage.key}}</div>
        <div class="desc">
            <div class="line top"></div>
            {{detailImage.desc}}
            <div class="line bottom"></div>
        </div>
        <div v-for="(item,index) in detailImage.list" :key="index">
            <img :src="item" alt="" @load="imageLoad">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailImage",
        props: {
            detailImage: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            imageLoad() {
                this.$bus.$emit("detailImageLoad");
            }
        }
    }
</script>

<style scoped lang="less">
    .detail_image{
        width: 100%;
        padding-top: 15px;
        .title{
            padding-left: 15px;
            font-size: 26px;
            font-weight: lighter;
            margin-bottom: 10px;
        }
        .desc{
            width: 100%;
            text-indent: 15px;
            position: relative;
            margin-bottom: 20px;
            .line{
                width: 150px;
                height: 1px;
                background-color: #ccc;
                margin: -10px 0;
                &::after{
                    content: "";
                    position: absolute;
                    display: block;
                    width: 5px;
                    height: 5px;
                    background-color: #000;
                    top: -2.5px;
                }
            }
            .top{
                position: absolute;
                top: 0;
                left: 15px;
            }
            .bottom{
                position: absolute;
                bottom: 0;
                right: 15px;
                transform: rotate(180deg);
            }
        }
        img{
            width: 100%;
        }
    }
</style>