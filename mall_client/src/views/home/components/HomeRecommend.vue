<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends" :key="item.title">
            <div class="image" :style="{backgroundImage: 'url(' + item.image +')'}"></div>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommends: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped lang="less">
    .recommend{
        width: 100%;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
        display: flex;
        text-align: center;
        .recommend-item{
            flex: 1;
            text-align: center;
            div.image{
                margin: 0 auto 8px;
                width: 70px;
                height: 70px;
                background-position: center;
                border-radius: 50%;
            }
        }
    }
</style>