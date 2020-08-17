<template>
    <div class="star">
        <img src="@/assets/img/detail/star.png" alt="" v-for="item in num">
    </div>
</template>

<script>
    export default {
        name: "Star",
        props: {
            num: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
    img{
        width: 12px;
        height: 12px;
    }
    .star{
        display: inline-block;
    }
</style>