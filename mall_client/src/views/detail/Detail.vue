<template>
    <div class="detail">
        <detail-nav-bar @navBarClick="navBarClick" ref="detailNav"></detail-nav-bar>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
            <!--detail轮播图-->
            <detail-swipper :banners="banners"></detail-swipper>
            <!--itemInfo-->
            <item-info :item-info="detailItemInfo"></item-info>
            <!--买家评价-->
            <comment :comment="comment" ref="comment"></comment>
            <!--店家信息-->
            <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
            <!--详情图片列表-->
            <detail-image :detail-image="detailImage"></detail-image>
            <!--参数信息-->
            <detail-params :item-prams="itemParams" ref="params"></detail-params>
            <!--推荐列表-->
            <detail-recommend :recommend-list="recommendList" ref="recommend"></detail-recommend>
        </scroll>
        <detail-tab-bar @addToCart="addToCart"></detail-tab-bar>
        <back-top @click.native="backTop" v-show="ifShowBackTop"></back-top>
    </div>
</template>

<script>
    import DetailNavBar from "./components/DetailNavBar";
    import DetailSwipper from "./components/DetailSwipper";
    import ItemInfo from "./components/ItemInfo";
    import Comment from "./components/Comment";
    import DetailShopInfo from "./components/DetailShopInfo";
    import DetailParams from "./components/DetailParams";
    import DetailRecommend from "./components/DetailRecommend";
    import DetailImage from "./components/DetailImage";
    import DetailTabBar from "./components/DetailTabBar";
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/contents/backTop/BackTop";
    import detailServeries, {DetailItemInfo} from "../../serveries/detailServeries";
    export default {
        name: "Detail",
        components: {
            Scroll,
            BackTop,
            DetailRecommend,
            ItemInfo,
            DetailNavBar,
            DetailSwipper,
            Comment,
            DetailParams,
            DetailImage,
            DetailShopInfo,
            DetailTabBar
        },
        data() {
            return{
                iid: 0,
                banners: [],
                detailItemInfo: {},
                comment: {},
                shopInfo: {},
                itemParams: {},
                recommendList: [],
                detailImage: {},
                navBarItemYs: [],
                currentIndex: 0,
                ifShowBackTop: false,
                good: {}
            }
        },
        created() {
        },
        mounted() {
            this.iid = this.$route.params.iid;
            this.getDetailData();

            this.$bus.$on('detailImageLoad', () => {
                this.refresh();
            });
        },
        methods: {
            addToCart() {
                this.$store.commit("addToCart",this.good);
            },
            // 返回首页
            backTop() {
                this.$refs.scroll.backTop(0,0,700);
            },
            refresh() {
                // console.log(this.$refs.scroll.refresh);
                this.$refs.scroll && this.$refs.scroll.refresh();

                if(this.$refs.comment && this.$refs.params && this.$refs.recommend) {
                    this.navBarItemYs = [];
                    // 获取值
                    this.navBarItemYs.push(0);
                    this.navBarItemYs.push(this.$refs.comment.$el.offsetTop);
                    this.navBarItemYs.push(this.$refs.params.$el.offsetTop);
                    this.navBarItemYs.push(this.$refs.recommend.$el.offsetTop);
                }

            },
            scroll(position) {
                let y = -position.y;

                this.ifShowBackTop = y > 800;

                let ys = this.navBarItemYs;
                if (y > ys[0] && y < ys[1] && this.currentIndex !== 0){
                    this.currentIndex = 0;
                    this.changeIndex();
                }else if (y >= ys[1] && y < ys[2] && this.currentIndex !== 1){
                    this.currentIndex = 1;
                    this.changeIndex();
                }else if (y >= ys[2] && y < ys[3] && this.currentIndex !== 2){
                    this.currentIndex = 2;
                    this.changeIndex();
                }else if (y >= ys[3] && this.currentIndex !== 3){
                    this.currentIndex = 3;
                    this.changeIndex();
                }
            },
            changeIndex() {
                this.$refs.detailNav.$data.currentIndex = this.currentIndex;
            },
            navBarClick(index) {
                this.$refs.scroll.backTop(0,-(this.navBarItemYs[index]),500);
                this.currentIndex = index;
            },

          getDetailData() {
              detailServeries.getGoodDetailByIid(this.iid).then(res => {
                  let data = res.data;
                  console.log(res);
                  // 轮播图
                  this.banners = data.topImages;
                  // itemInfo currency,highNowPrice,nowPrice,oldPrice,priceText,columns,services
                  this.detailItemInfo = new DetailItemInfo(data.itemInfo.title,data.priceInfo.currency,data.priceInfo.highNowPrice,data.priceInfo.nowPrice,
                      data.priceInfo.oldPrice,data.priceInfo.priceTags.text,data.itemServices.columns,data.itemServices.services);
                  // 买家评价
                  this.comment = data.rateInfo;
                  // 店家信息
                  this.shopInfo = data.shopInfo;
                  // 参数信息
                  this.itemParams = data.itemParams;
                  // 推荐列表
                  this.recommendList = data.recommend;
                  // 信息图片
                  this.detailImage = {desc: data.detailInfo.desc,
                      key: data.detailInfo.detailImage.detailImage[0].key,
                      list: data.detailInfo.detailImage.detailImage[0].list,
                  };

                  // 购物车item
                  this.good = {
                      iid: this.iid,
                      title: this.detailItemInfo.title,
                      image: this.banners[0],
                      price: this.detailItemInfo.nowPrice
                  }
              })
          }
        },
        watch: {
        }
    }
</script>

<style scoped lang="less">
    .detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
        .content{
            height: calc(100% - 44px);
            background-color: #fff;
        }
    }
</style>