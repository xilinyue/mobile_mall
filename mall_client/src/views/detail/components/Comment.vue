<template>
    <div class="comment">
        <div class="title">买家评价</div>
        <div class="tags">
            <span v-for="(item,index) in comment.rateTags" :key="index">
                {{item.value}}
            </span>
        </div>
        <div class="comment_list">
            <div class="comment_item" v-for="(item,index) in comment.list" :key="index">
                <div class="user">
                    <div class="avatar" :style="{backgroundImage: 'url('+item.user.avatar+')'}"></div>
                    <div class="uname">{{item.user.uname}}</div>
                </div>
                <div class="content">{{item.content}}</div>
                <div class="style">{{item.style}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props: {
            comment: {
                type: Object,
                default() {return {}}
            }
        }
    }
</script>

<style scoped lang="less">
    .comment{
        width: 100%;
        padding-top: 15px;
        background-color: rgba(100,100,100,.1);
        position: relative;
        .title{
            font-size: 16px;
            font-weight: 500;
            padding-bottom: 6px;
            padding-left: 5px;
            background-color: #fff;
        }
        .tags{
            background-color: #fff;
            padding: 0 10px;
            display: flex;
            span{
                padding: 3px 6px;
                color: #FF2255;
                background-color: #FFE8EE;
                border-radius: 3px;
                margin-right: 10px;
            }
        }
        .comment_list{
            width: 100%;
            background-color: #fff;
            padding: 10px;
            .comment_item{
                width: 100%;
                .user{
                    display: flex;
                    padding-bottom: 7px;
                    .avatar{
                        width: 40px;
                        height: 40px;
                        background-position: center;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                    .uname{
                        flex: 1;
                    }
                }
                .content{
                    font-size: 14px;
                }
                .style{
                    padding: 3px;
                    color: #666666;
                }
            }
        }
    }
</style>