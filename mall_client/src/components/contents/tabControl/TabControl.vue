<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index"
             :class="['tab-control-item',{active: index === currentIndex}]"
            @click="tabClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
                type: Array,
                default: []
            }
        },
        data() {
            return{
                currentIndex: 0
            }
        },
        methods: {
            tabClick(index){
                this.currentIndex = index;
                this.$emit('tabClick',index);
            }
        }
    }
</script>

<style scoped lang="less">
    .tab-control{
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        .tab-control-item{
            flex: 1;
            font-size: 14px;
            text-align: center;
            span{
                padding: 3px;
            }
        }
        .active{
            color: var(--color-hight-text);
            span{
                border-bottom: 2px solid var(--color-tint);
            }
        }
    }
</style>