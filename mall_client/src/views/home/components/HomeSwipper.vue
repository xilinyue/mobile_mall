<template>
    <div>
        <Carousel autoplay>
            <Carousel-item v-for="(item,index) in banners" :key="index">
                <div class="demo-carousel">
                    <a :href="item.link">
                        <img :src="item.image" @load="imageLoad"/>
                    </a>
                </div>
            </Carousel-item>
        </Carousel>
    </div>
</template>

<script>
    export default {
        name: "HomeSwipper",
        props: {
            banners: {
                type: Array,
                default: []
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
        img{
            width: 100%;
            height: 150px;
        }
    }
</style>