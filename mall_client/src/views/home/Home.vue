<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <!--轮播图-->
        <home-swipper :banners="banners"></home-swipper>
        <!--推荐-->
        <home-recommend :recommends="recommends"></home-recommend>
        <!--本周流行-->
        <home-feature></home-feature>
        <!--TAB-->
        <tab-control :titles="['流行', '新款', '精选']"></tab-control>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabControl from "../../components/contents/tabControl/TabControl";

    import HomeSwipper from "./components/HomeSwipper";
    import HomeRecommend from "./components/HomeRecommend";
    import HomeFeature from "./components/HomeFeature";
    import homeServeries from "../../serveries/homeServeries";
    export default {
        name: "Home",
        components: {
            NavBar,
            TabControl,
            HomeSwipper,
            HomeRecommend,
            HomeFeature
        },
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        created() {
            homeServeries.getHomeMultiData().then(res => {
                this.banners = res.data.banner;
                this.recommends = res.data.recommend;
            });
        }
    }
</script>

<style scoped lang="less">
    #home{
        padding-top: 44px;
        .home-nav{
            position: fixed;
            background-color: var(--color-tint);
            color: #fff;
            top: 0;
            left: 0;
            right: 0;
            z-index: 9;
        }
        .tab-control{
            position: sticky;
            top: 44px;
        }
    }
</style>