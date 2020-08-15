<template>
    <div>
        <Carousel autoplay>
            <Carousel-item v-for="(item,index) in banners" :key="index">
                <div class="demo-carousel">
                    <img :src="item" @load="imageLoad"/>
                </div>
            </Carousel-item>
        </Carousel>
    </div>
</template>

<script>
    export default {
        name: "DetailSwipper",
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            imageLoad() {
                this.$emit("swipeImageLoad");
            }
        }
    }
</script>

<style scoped lang="less">
    .ivu-carousel {
        height: 300px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
</style>