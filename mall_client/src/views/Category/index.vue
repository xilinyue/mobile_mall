<template>
    <div>
        <nav-bar>
            <template #middle>分类</template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/nav-bar/NavBar";
    import request from '../../service/index';
    export default {
        name: "index",
        components: {
            NavBar
        }
    }
</script>

<style lang="less" scoped>
.nav-bar{
    background-color: #70a1ff;
    color: #fff;
    font-weight: bold;
}
</style>