<template>
    <div class="back-top">
        <div class="up">↑</div>
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped lang="less">
    .back-top{
        position: fixed;
        bottom: 60px;
        right: 15px;
        .up{
            width: 45px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            background-color: var(--color-background);
            color: var(--color-hight-text);
            font-size: 26px;
            font-weight: bold;
            border-radius: 50%;
            box-shadow: 0 0 3px rgba(0,0,0,0.3);
        }
    }
</style>