<template>
    <div id="tmpl">
        <div id="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea v-model="commentContent"></textarea>
            <mt-button type="primary" size="large" @click="postComment();getComment()">提交</mt-button>
        </div>

        <div id="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in list">
                <div class="title">
                    <span>第{{index + 1}}楼:</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>


<script>

    import {Toast} from 'mint-ui';
    import common from '../../kits/common.js';

    export default {
        data() {
            return {
                commentContent: "",
                pageindex: 0,
                list: [],
                flag: 0
            }
        },
        methods: {
            getMore() {
                this.pageindex++;
                this.getComment(this.pageindex, 1);
            },
            postComment() {
                if (this.commentContent.trim().length <= 0) {
                    Toast("内容不能为空");
                    return
                }
                this.$http.post(
                    common.apidomain + "/api/postcomment/" + this.id,
                    {content: this.commentContent},
                    {emulateJSON: true}).then(
                    res => {
                        Toast(res.body);
                        this.commentContent = "";
                        this.pageindex = 0;
                        this.getComment(this.pageindex, 0);
                    }
                )
            },
            getComment(pageindex, flag) {
                pageindex = pageindex || 1;
                this.$http.get(common.apidomain + "/api/getcomments/" + this.id + "?pageindex=" + pageindex)
                    .then(
                        res => {
                            if (res.body.status != 0) {
                                Toast("请求失败");
                                return
                            }
                            if (flag === 1) {
                                this.list = this.list.concat(res.body.message);
                            } else {
                                this.list = res.body.message;
                            }
                        }
                    )
            }
        },
        created() {
            this.getComment();
        },
        props: ["id"]
    }
</script>


<style scoped>
    #postcomment {
        padding: 5px;
    }

    .p {
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    #commentlist {
        padding: 5px;
    }

    .title {
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>