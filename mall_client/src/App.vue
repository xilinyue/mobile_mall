<template>
  <div id="app">
    <slider-transition>
      <router-view class="center"></router-view>
    </slider-transition>
    <TabBar></TabBar>
  </div>
</template>
<script>
  import TabBar from "./components/tabbar/TabBar";
  import SliderTransition from "./components/slider-transition/SliderTransition";
  export default {
    components: {
      TabBar,
      SliderTransition
    }
  }
</script>
<style lang="less">
@import "assets/css/reset.css";
@import "assets/css/font/icon/iconfont.css";
  .center {
    position: absolute;
    width: 100%;
  }
</style>
