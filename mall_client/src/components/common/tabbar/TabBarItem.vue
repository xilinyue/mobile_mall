<template>
    <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return{
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path);
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        }
    }
</script>

<style scoped lang="less">
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        box-sizing: border-box;
        line-height: 1.2;
        span{
            font-size: 24px;
        }
        div{
            font-size: 14px;
        }
    }
</style>