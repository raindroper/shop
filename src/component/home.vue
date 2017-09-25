<template>
    <div id="tmpl">

        <mt-swipe :auto="1000000000">
            <mt-swipe-item v-for="item in swipeList"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="photo">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="goods">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="comment">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="video">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="call">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import {Toast} from "mint-ui";
    import common from "../kits/common.js"

    export default {
        data() {
            return {
                swipeList: []
            }
        },
        methods: {
            geiSwipe() {
                var url = common.apidomain;
                this.$http.get(url + "/api/getlunbo").then(
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
            this.geiSwipe();
        }
    }
</script>


<style scoped>
    .mint-swipe-item {
        height: 200px;
        width: 100%;
    }

    .mint-swipe,.mint-swipe-items-wrap {
        height: 200px;
    }

    .mint-swipe-item > img {
        width: 100%;
        height: 200px;
        vertical-align: bottom;
    }

    .mui-content, .mui-content ul {
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
    }

    .mui-grid-view.mui-grid-9 {
        border-top: 0px;
        border-left: 0px;
    }

    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before {
        content: '';
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }

    .mui-icon-home:before {
        background-image: url(../../statics/img/1.png);
    }

    .mui-icon-email:before {
        background-image: url(../../statics/img/2.png);
    }

    .mui-icon-chatbubble:before {
        background-image: url(../../statics/img/3.png);
    }

    .mui-icon-location:before {
        background-image: url(../../statics/img/4.png);
    }

    .mui-icon-search:before {
        background-image: url(../../statics/img/5.png);
    }

    .mui-icon-phone:before {
        background-image: url(../../statics/img/6.png);
    }
</style>