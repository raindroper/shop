<!-- coded by Rae -->
<template>
    <div id="tmpl">
        <h4 v-text="info.title"></h4>
        <p class="line"></p>
        <p v-html="info.content"></p>
    </div>
</template>


<script>

    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                id: 0,
                info: {}
            }
        },
        methods: {
            getdesc() {
                this.$http.get(common.apidomain + "/api/goods/getdesc/" + this.id).then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                        }
                        this.info = res.body.message[0];
                    }
                )
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getdesc();
        }
    }
</script>


<style scoped>
    #tmpl {
        padding: 5px;
    }

    #tmpl h4 {
        color: #0094ff;
    }

    #tmpl .line {
        height: 1px;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
</style>