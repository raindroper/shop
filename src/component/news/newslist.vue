<template>
    <div id="tmpl">
        <ul class="mui-table-view">
            <li v-for="item in list" class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <div class="ft">
                            <span>发表时间:{{item.add_time | datefmt("YYYY-MM-DD HH:mm:ss"}}</span><br>
                            <span>点击数:{{item.click}}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            getNews() {
                this.$http.get("http://182.254.146.100:8899/api/getnewslist").then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                            return
                        }
                        this.list = res.body.message;
                    }
                )
            }
        },
        created() {
            this.getNews();
        }
    }
</script>


<style scoped>
    .mui-table-view img {
        height: 85px;
        width: 85px;
    }
    .mui-media-body {
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }

    .mui-table-view .mui-media-object {
        max-width: 80px;
        line-height: 80px;
    }

    .ft {
        margin-top: 1em;
        font-size: 14px;
        color: #0094ff;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .ft .click {
        margin-left: 20px;
    }
</style>