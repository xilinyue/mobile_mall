<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <!--TAB-->
        <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"
                     ref="tabControl1" v-show="ifTabControlFixed"></tab-control>
        <scroll
                class="content"
                ref="scroll"
                @scroll="scroll"
                :probe-type="3"
                :pull-up-load="pullUpLoad"
                @pullingUp="loadMore">
            <button @click="test" id="test">测试</button>
            <!--轮播图-->
            <home-swipper :banners="banners" @swipeImageLoad="swipeImageLoad"></home-swipper>
            <!--推荐-->
            <home-recommend :recommends="recommends"></home-recommend>
            <!--本周流行-->
            <home-feature></home-feature>
            <!--TAB-->
            <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"
                        ref="tabControl2"></tab-control>
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
                    'pop': {page: 1,hasMore: true,list: []},
                    'new': {page: 1,hasMore: true,list: []},
                    'sell': {page: 1,hasMore: true,list: []}
                },
                tabType: 'pop',
                ifShowBackTop: false,
                ifTabControlFixed: false,
                tabControlOffsetTop: 0,
                pullUpLoad: true,  //未起到想要的效果
                saveY: 0
            }
        },
        created() {
            this.getHomeMultiData();

            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
        },
        mounted() {
            // 监听图片刷新事件
            const refresh = this.debounce(this.$refs.scroll.refresh,500);
            this.$bus.$on('imageLoad', () => {
               refresh();
            });
        },
        activated() {
            // console.log('activated',this.$refs.scroll);
            this.$refs.scroll.backTop(0,this.saveY,0);
            this.$refs.scroll.refresh();
        },
        deactivated() {
            // console.log('deactivated',this.$refs.scroll);
            this.saveY = this.$refs.scroll.getY();
        },
        computed: {
            showGoodsList() {
                return this.goods[this.tabType].list;
            }
        },
        methods: {
            test() {
                console.log(this.$refs.scroll.getY());
            },
            //debounce 防抖函数
            debounce(fun, delay) {
                let timer = null;

                return function (...args) {
                    if (timer) {clearTimeout(timer);}

                    timer = setTimeout(()=> {
                        fun.apply(this,args);
                    },delay);
                }
            },

            //获取tabControl 的offsetTop值
            swipeImageLoad() {
                this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
            },

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
                this.$refs.tabControl1.currentIndex = index;
                this.$refs.tabControl2.currentIndex = index;

                // 切换是否可以loadMore
                this.pullUpLoad = this.goods[this.tabType].hasMore;
            },
            // 返回首页
            backTop() {
                this.$refs.scroll.backTop(0,0,700);
            },
            scroll(position) {
                this.ifShowBackTop = (-position.y) > 800;

                this.ifTabControlFixed = (-position.y) > this.tabControlOffsetTop;
            },
            // 加载更多
            loadMore() {
                if (this.goods[this.tabType].hasMore){
                    this.getHomeGoods(this.tabType);
                }
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
                        this.goods[type].hasMore = false;
                        this.pullUpLoad = false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    #home{
        #test{
            position: fixed;
            right: 0;
            top: 100px;
            z-index: 100;
        }
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
            z-index: 0;
            background-color: #fff;
        }
    }
</style>