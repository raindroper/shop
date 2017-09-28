<template>
    <div id="tmpl">
        <div id="mui-content" class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">

                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list">
                    <router-link v-bind="{to:'/goods/goodsinfo/'+item.id}">
                        <img class="mui-media-object"
                             :src="item.img_url">
                        <div class="mui-media-body">Color of SIP CBD</div>
                        <div class="desc">
                            <p>
                                <span>￥{{item.sell_price}}</span>
                                <s>￥{{item.market_parice}}</s>
                            </p>
                            <p>
                            <h6 class="left">热卖中</h6>
                            <h6 class="right">剩余{{item.stock_quantity}}件</h6>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                list: [],
                page: 1
            }
        },
        methods: {
            getlist() {
                this.$http.get(common.apidomain + "/api/getgoods?pageindex=" + this.page).then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                        }
                        this.list = res.body.message;
                    }
                )
            }
        },
        created() {
            this.getlist();
        }
    }
</script>


<style scoped>
    #mui-content li {
        border: 1px solid rgba(0, 0, 0, 0.4);
        -webkit-box-shadow: 0 0 4px #000;
        -moz-box-shadow: 0 0 4px #000;
        box-shadow: 0 0 4px #000;
        margin-left: 4px;
        padding-left: 0px;
    }

    #mui-content .mui-media-body {
        color: #0094ff;
    }

    #mui-content .desc {
        height: 60px;
        background-color: rgba(0, 0, 0, 0.1);
        margin-top: 10px;
        padding: 5px;
        text-align: left;
    }

    #mui-content .desc span {
        color: red;
        margin-right: 15px;
    }

    #mui-content a {
        padding-left: 0px;
        margin-left: 0px;
    }

    #mui-content .desc .right {
        position: absolute;
        right: 10px;
        bottom: 0px;
    }

    #mui-content .desc .left {
        position: absolute;
        left: 10px;
        bottom: 0px;
    }
</style>