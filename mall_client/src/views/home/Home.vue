<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <scroll
                class="content"
                ref="scroll"
                @scroll="scroll"
                :probe-type="3"
                :pull-up-load="true"
                @pullingUp="loadMore">
            <!--轮播图-->
            <home-swipper :banners="banners"></home-swipper>
            <!--推荐-->
            <home-recommend :recommends="recommends"></home-recommend>
            <!--本周流行-->
            <home-feature></home-feature>
            <!--TAB-->
            <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
            <!--商品展示-->
            <goods-list :goods-list="showGoodsList"></goods-list>
        </scroll>
        <back-top @click.native="backTop" v-show="ifShowBackTop"></back-top>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabControl from "../../components/contents/tabControl/TabControl";
    import GoodsList from "../../components/contents/goodsList/GoodsList";
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/contents/backTop/BackTop";

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
            HomeFeature,
            GoodsList,
            Scroll,
            BackTop
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {page: 1,list: []},
                    'new': {page: 1,list: []},
                    'sell': {page: 1,list: []}
                },
                tabType: 'pop',
                ifShowBackTop: false
            }
        },
        created() {
            this.getHomeMultiData();

            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
        },
        computed: {
            showGoodsList() {
                return this.goods[this.tabType].list;
            }
        },
        methods: {
            // 修改商品展示数据类型
            tabClick(index){
                switch (index) {
                    case 0:
                        this.tabType = 'pop';
                        break
                    case 1:
                        this.tabType = 'new';
                        break
                    case 2:
                        this.tabType = 'sell';
                        break
                }
            },
            // 返回首页
            backTop() {
                this.$refs.scroll.backTop(0,0,700);
            },
            scroll(position) {
                this.ifShowBackTop = (-position.y) > 800;
            },
            // 加载更多
            loadMore() {
                this.getHomeGoods(this.tabType);

                this.$refs.scroll.finishPullUp();
            },

            // 获取首页轮播如和推荐数据
            getHomeMultiData() {
                homeServeries.getHomeMultiData().then(res => {
                    this.banners = res.data.banner;
                    this.recommends = res.data.recommend;
                });
            },
            // 获取首页商品数据
            getHomeGoods(type) {
                let page = this.goods[type].page;
                let index = 0;
                if (type === 'pop'){
                    index = 0;
                }else if (type === 'new'){
                    index = 1;
                }else{
                    index = 2;
                }
                homeServeries.getHomeGoods({type: index,page}).then(res => {
                    if (res.code === 0){
                        let data = res.data;
                        this.goods[type].list.push(...data);
                        this.goods[type].page += 1;
                    }else if (res.code === 3){
                        let data = res.data;
                        this.goods[type].list.push(...data);
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    #home{
        padding-top: 44px;
        height: 100vh;
        .home-nav{
            position: fixed;
            background-color: var(--color-tint);
            color: #fff;
            top: 0;
            left: 0;
            right: 0;
            z-index: 9;
        }
        .content{
            position: absolute;
            top: 44px;
            bottom: 49px;
            left: 0;
            right: 0;
        }
        .tab-control{
            position: sticky;
            top: 44px;
            z-index: 9;
            background-color: #fff;
        }
    }
</style>