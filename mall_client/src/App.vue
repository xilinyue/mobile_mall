<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "./components/contents/mainTabBar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style lang="less">
  @import "assets/css/base.css";
  @import "assets/css/font/iconfont.css";
</style>
