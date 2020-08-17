<template>
    <div class="detail-nav-bar">
        <nav-bar>
            <div slot="left" @click="backUp">
                <div class="back"></div>
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" :key="index"
                     :class="['title-item',{active: currentIndex === index}]"
                    @click="itemClick(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        components: {
            NavBar
        },
        data() {
            return{
                titles: ['商品','评论','参数','推荐'],
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                this.$emit("navBarClick",index);
            },
            backUp() {
                this.$router.back();
            }
        }
    }
</script>

<style lang="less" scoped>
    .detail-nav-bar{
        position: relative;
        z-index: 9;
        background-color: #fff;
        .back{
            margin: 12px auto;
            width: 20px;
            height: 20px;
            border-top: 2px solid #000;
            border-left: 2px solid #000;
            transform: rotate(-45deg);
        }
        .title{
            display: flex;
            .title-item{
                flex: 1;
                font-size: 14px;
            }
            .active{
                color: var(--color-hight-text);
            }
        }
    }
</style>