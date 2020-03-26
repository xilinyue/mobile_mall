<template>
    <div>
        <nav-bar>
            <template #middle>购物街</template>
        </nav-bar>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide v-for="(item,index) in bannerList" :key="index">
                <img :src="'http://localhost:3000'+item.img_url" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import NavBar from "../../components/nav-bar/NavBar";
    import request from "../../service";
    export default {
        name: "index",
        components: {
            NavBar
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: {
                        delay: 1000
                    },
                    loop: true
                },
                bannerList: []
            }
        },
        created() {
            this.getAllBanner();
        },
        methods: {
            getAllBanner() {
                request.get('/banner/getAllBanner').then(res => {
                    let result = res.data;
                    this.bannerList = result.data;
                })
            }
        }
    }
</script>

<style scoped lang="less">
.nav-bar{
    background-color: #70a1ff;
    color: #fff;
    font-weight: bold;
}
    .swiper{
        width: 100%;
        height: 0;
        padding-bottom: 52%;
        img{
        width: 100%;
        }
        /deep/ .swiper-pagination-bullet-active {
            background-color: #1e90ff;
        }
    }
</style>