<template lang="html">
    <div id="tmpl">
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p>{{info.add_time | datefmt('YYYY-MM-DD')}} {{info.click}}次浏览</p>
        </div>
        <div id="commentcontent" v-html="info.content"></div>
        <comment :id="id"></comment>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import common from "../../kits/common.js"
    import comment from "../subcom/comment.vue"

    export default {
        data() {
            return {
                id: 0,
                info: {}
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getinfo();
        },
        methods: {
            getinfo() {
                var url = common.apidomain + "/api/getnew/" + this.id;

                this.$http.get(url).then(function (res) {
                    var body = res.body;
                    if (body.status != 0) {
                        Toast("请求失败");
                        return;
                    }
                    this.info = body.message[0]
                })
            }
        },
        components : {
            comment
        }
    }
</script>

<style scoped lang="css">
    .title h4 {
        color: #0094ff;
    }

    .title p {
        color: rgba(0, 0, 0, 0.5);
    }

    .title, .content {
        padding: 5px;
    }


</style>
