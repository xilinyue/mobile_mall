<template>
    <div class="params">
        <div class="rule" v-if="itemPrams.rule">
            <div v-for="(item,index) in itemPrams.rule.tables[0]"
                 :key="index">
                <span v-for="(rule,i) in item"
                      :key="i"
                      :class="{value: index !== 0 && i !== 0,head: i === 0, header: index === 0 && i !== 0}">
                    {{rule}}
                </span>
            </div>
        </div>
        <div class="info" v-if="itemPrams.info">
            <div v-for="(item,key) in itemPrams.info.set" :key="key">
                <span class="header">{{key}}</span>
                <span class="value">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailParams",
        props: {
            itemPrams: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .params{
        width: 100%;
        padding-top: 15px;
        background-color: rgba(100,100,100,.1);
        font-size: 16px;
        .rule{
            background-color: #fff;
            color: #727272;
            div{
                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid rgba(100,100,100,.1);
                display: flex;
                span{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .head{
                    display: inline-block;
                    width: 100px;
                    text-align: center;
                }
                .value,.header{
                    color: #eb4868;
                    flex: 1;
                }
            }
        }
        .info{
            background-color: #fff;
            color: #727272;
            div{
                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid rgba(100,100,100,.1);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                .header{
                    display: inline-block;
                    width: 100px;
                    text-align: center;
                }
                .value{
                    color: #eb4868;
                }
            }
        }
    }
</style>