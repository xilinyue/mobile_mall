<template>
    <div class="detail">
        <detail-nav-bar></detail-nav-bar>
        <!--detail轮播图-->
        <detail-swipper :banners="banners"></detail-swipper>
        <!--itemInfo-->
        <item-info :item-info="detailItemInfo"></item-info>
        <!--买家评价-->
        <comment :comment="comment"></comment>
    </div>
</template>

<script>
    import DetailNavBar from "./components/DetailNavBar";
    import DetailSwipper from "./components/DetailSwipper";
    import ItemInfo from "./components/ItemInfo";
    import Comment from "./components/Comment";
    import detailServeries, {DetailItemInfo} from "../../serveries/detailServeries";
    export default {
        name: "Detail",
        components: {
            ItemInfo,
            DetailNavBar,
            DetailSwipper,
            Comment
        },
        data() {
            return{
                iid: 0,
                banners: [],
                detailItemInfo: {},
                comment: {}
            }
        },
        created() {
        },
        mounted() {
            this.iid = this.$route.params.iid;
            this.getDetailData();
        },
        methods: {
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
    }
</style>