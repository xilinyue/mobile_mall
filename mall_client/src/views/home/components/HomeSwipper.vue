<template>
    <div>
        <Carousel autoplay>
            <Carousel-item v-for="(item,index) in banners" :key="index">
                <div class="demo-carousel">
                    <a :href="item.link">
                        <img :src="item.image" />
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