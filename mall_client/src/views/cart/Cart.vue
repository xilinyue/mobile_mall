<template>
    <div id="cart">
        <nav-bar class="cart_nav">
            <div slot="center">购物车</div>
        </nav-bar>
        <div class="cart_items">
            <div class="item" v-for="(item,index) in showCartItems" :key="item.iid">
                <div class="img" :style="{backgroundImage: 'url('+item.image+')'}"></div>
                <div class="center">
                    <div class="title">{{item.title}}</div>
                    <div class="price">￥{{item.price}}</div>
                </div>
                <div class="operation">
                    <div class="delete" @click="deleteItemNum(index)">-</div>
                    <div class="num">{{item.num}}</div>
                    <div class="add" @click="addItemNum(index)">+</div>
                </div>
<!--                <div class="total_price">￥{{item.totalPrice}}</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Cart",
        components: {
            NavBar
        },
        data() {
            return{
                showCartItems: [],
            }
        },
        mounted() {
            this.computedCartItems();
        },
        methods: {
            addItemNum(index) {
                let good = {...this.showCartItems[index]};
                delete good.totalPrice;
                // this.$store.commit("addToCart",good);
                this.showCartItems[index].num = (good.num + 1);
            },
            deleteItemNum(index){

            },
            computedCartItems() {
                this.showCartItems = this.$store.state.cartItems;
                // this.showCartItems.forEach(item => {
                //     item['totalPrice'] = item.price * item.num;
                // });
            }
        }
    }
</script>

<style scoped lang="less">
    #cart{
        width: 100%;
        .cart_nav{
            position: fixed;
            background-color: var(--color-tint);
            color: #fff;
            top: 0;
            left: 0;
            right: 0;
            z-index: 9;
        }
        .cart_items{
            margin-top: 50px;
            width: 100%;
            height: 80px;
            .item{
                margin: 0 10px 10px;
                border-bottom: 2px solid rgba(100,100,100,.1);
                /*box-sizing: border-box;*/
                display: flex;
                /*justify-content: space-between;*/
                .img{
                    width: 60px;
                    height: 60px;
                    background-position: center;
                    background-size: cover;
                    margin-right: 7px;
                }
                .center{
                    flex: 1;
                    height: 60px;
                    overflow: hidden;
                }
                .operation{
                    width: 60px;
                    display: flex;
                    padding: 0 6px;
                    margin-top: 10px;
                    div{
                        width: 16px;
                        text-align: center;
                    }
                    .delete,.add{
                        height: 16px;
                        background-color: #ff8198;
                        color: #fff;
                        border-radius: 3px;
                    }
                }
                .total_price{
                    margin-top: 10px;
                    font-size: 14px;
                    width: 80px;
                    text-align: center;
                }
            }
        }
    }
</style>