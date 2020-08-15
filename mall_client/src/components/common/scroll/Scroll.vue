<template>
    <div class="wrapper" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return{
                scroll: null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.scroll,{
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            });

            // 监听滚动
            this.scroll.on("scroll", (position) => {
                // console.log(this.scroll);
                this.$emit("scroll",position);
            });

            if (this.pullUpLoad){
                // 监听下拉加载更多
                this.scroll.on("pullingUp", () => {
                    this.$emit("pullingUp");
                })
            }
        },
        methods: {
             backTop(x,y,time = 500) {
                this.scroll.scrollTo(x,y,time);
            },
            finishPullUp() {
                this.scroll.finishPullUp();
            },
            // 刷新scroll
            refresh() {
                // console.log("----");
                this.scroll && this.scroll.refresh();
            },
            getY() {
                // console.log(this.scroll.y);
                return this.scroll ? this.scroll.y : 0;
            }
        }
    }
</script>

<style scoped>

</style>