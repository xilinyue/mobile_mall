<template>
    <div class="slider-transition">
        <transition :name="name">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "SliderTransition",
        data() {
            return{
                name: ''
            }
        },
        watch: {
            $route(to,from){
                if (from.fullPath === '/') return;

                if (to.meta.index > from.meta.index) {
                    this.name = 'left';
                }else{
                    this.name = 'right';
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    .left-leave-active{
        transform: translateX(0);
        transition: transform 1s;
    }
    .left-leave-to{
        transform: translateX(-100%);
    }
    .left-enter-active{
        transform: translateX(100%);
        transition: transform 1s;
    }
    .left-enter-to{
        transform: translateX(0);
    }


    .right-leave-active{
        transform: translateX(0);
        transition: transform 1s;
    }
    .right-leave-to{
        transform: translateX(100%);
    }
    .right-enter-active{
        transform: translateX(-100%);
        transition: transform 1s;
    }
    .right-enter-to{
        transform: translateX(0);
    }
</style>