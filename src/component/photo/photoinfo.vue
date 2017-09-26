<!-- coded by Rae -->
<template>
    <div id="tmpl">
        <div id="desc">
            <div class="title">
                <h4>{{photoinfo.title}}</h4>
                <p>{{photoinfo.add_time}}{{photoinfo.click}}</p>
                <p class="line"></p>
            </div>
        </div>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for="item in photolist" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <img :src="item.src">
                </li>
            </ul>
        </div>

        <p v-html="photoinfo.content"></p>

        <comment :id="id"></comment>

    </div>
</template>


<script>
    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';
    import comment from '../subcom/comment.vue'

    export default {
        components: {
            comment
        },
        data() {
            return {
                id: 0,
                photoinfo: {},
                photolist: []
            }
        },

        methods: {
            getimginfo() {
                this.$http.get(common.apidomain + "/api/getimageInfo/" + this.id).then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                            return
                        }
                        this.photoinfo = res.body.message[0];
                    }
                )
            },
            gethumimage() {
                this.$http.get(common.apidomain + "/api/getthumimages/" + this.id).then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                            return
                        }
                        this.photolist = res.body.message;
                    }
                )
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getimginfo();
            this.gethumimage();
            console.log(this.photoinfo);
        }
    }
</script>


<style scoped>
    #desc {
        padding: 10px;
    }

    #desc .title h4 {
        color: #0094ff;
    }

    #desc .title p {
        color: rgba(0, 0, 0, 0.4);
        margin-top: 10px;
    }

    #desc .title .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
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

    .mui-content img {
        width: 100px;
        height: 100px;
    }
</style>