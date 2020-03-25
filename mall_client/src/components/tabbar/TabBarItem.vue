<template>
    <div class="tab-bar-item" :class="{active: isActive}" @click="handleClick">
        <slot name="item-icon"></slot>
        <slot name="item-msg"></slot>
    </div>
</template>
<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: {type: String, required: true}
        },
        methods: {
            handleClick() {
                this.$router.push(this.path);
            }
        },
        computed: {
            isActive() {
                return this.$route.fullPath === this.path;
            }
        }
    }
</script>
<style lang="less" scoped>
    .tab-bar-item{
        flex: 1;
        text-align:  center;
        height: 49px;
        span:nth-child(1){
            display: inline-block;
            width: 24px;
            height: 24px;
            font-size: 24px;
            margin-top: 3px;
            margin-bottom: 3px;
            vertical-align: middle;
        }
    }
    .active {
        color: #1e90ff;
        font-weight: bold;
    }
</style>