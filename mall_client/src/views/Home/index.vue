<template>
    <div>
        <nav-bar>
            <template #middle>购物街</template>
        </nav-bar>
        <div >
            <swiper :options="swiperOption" class="swiper" v-if="bannerList.length!==0">
                <swiper-slide v-for="item in bannerList">
                    <img :src="'http://localhost:3000/' + item.img_url" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <!--推荐部分-->
        <ul class="recommend">
            <li v-for="item in recommendList" class="recommend-item">
                <img :src="'http://localhost:3000/' + item.pic[0].picAddr" alt="">
                <p>{{item.proDesc}}</p>
            </li>
        </ul>
        <!--流行部分-->
        <div class="popular">
            <img src="../../assets/images/popular.png" alt="">
        </div>
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
                bannerList: [],
                recommendList: []
            }
        },
        created() {
            this.getAllBanner();
            this.getProductList();
        },
        methods: {
            getAllBanner() {
                request.get('/banner/getAllBanner').then(res => {
                    let result = res.data;
                    this.bannerList = result.data;
                })
            },
            getProductList() {
                request.get('/product/queryProductDetailList',{params: {page: 1,pageSize: 4}}).then((res) => {
                    let productList = res.data.rows;
                    productList.forEach(item => {
                        request.get('/product/queryProductDetail',{params: {id: item.id}}).then(res => {
                            let data = res.data;
                            this.recommendList.push(data);
                        })
                    })
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
}
.swiper img{
    width: 100%;
}
.swiper /deep/ .swiper-pagination-bullet-active{
    background-color: red;
}
    .recommend{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        padding: 15px 0 30px;
        border-bottom: 8px solid #eee;
        text-align: center;
        .recommend-item{
            flex: 1;
            img{
                width: 80%;
            }
            p{
                padding-top: 10px;
            }
        }
    }
    .popular{
        width: 100%;
        height: 0;
        padding-bottom: 73.37%;
        img{
            width: 100%;
        }
    }

</style>