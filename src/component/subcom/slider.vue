<!-- coded by Rae -->
<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in swipeList"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>


<script>

    import {Toast} from "mint-ui";
    import common from "../../kits/common.js";

    export default {
        data() {
            return {
                swipeList: []
            }
        },
        methods: {
            getSwipe() {
                this.$http.get(this.imgurl).then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                            return
                        }
                        this.swipeList = res.body.message;
                    }
                )
            }
        },
        created() {
            this.getSwipe()
        },
        props: ["imgurl"]
    }
</script>


<style scoped>
    .mint-swipe-item {
        height: 200px;
        width: 100%;
    }

    .mint-swipe, .mint-swipe-items-wrap {
        height: 200px;
    }

    .mint-swipe-item > img {
        width: 100%;
        height: 200px;
        vertical-align: bottom;
    }
</style>