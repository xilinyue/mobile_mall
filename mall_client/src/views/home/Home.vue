<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <!--轮播图-->
        <Carousel autoplay>
            <Carousel-item v-for="item in banner">
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
    import NavBar from "../../components/common/navbar/NavBar";
    import homeServeries from "../../serveries/homeServeries";
    export default {
        name: "Home",
        components: {
            NavBar
        },
        data() {
            return {
                banner: [],
                recommend: []
            }
        },
        created() {
            homeServeries.getHomeMultiData().then(res => {
                this.banner = res.data.banner;
                this.recommend = res.data.recommend;
            });
        }
    }
</script>

<style scoped lang="less">
    #home{
        .home-nav{
            background-color: var(--color-tint);
            color: #fff;
        }
        .ivu-carousel {
            img{
                width: 100%;
                height: 150px;
            }
        }
    }
</style>