<!-- coded by Rae -->
<template>
    <div id="tmpl">
        <div class="slider">
            <slider :imgurl="imgurl"></slider>
        </div>
        <div id="buy">
            <h4>{{info.title}}</h4>
            <p class="line"></p>
            <ul>
                <li class="price">
                    市场价: <s>￥{{info.market_price}}</s> 销售价：<span>￥{{info.sell_price}}</span>
                </li>
                <li>
                    购买数量：
                </li>

                <li>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small">加入购物车</mt-button>
                </li>
            </ul>
        </div>

        <div id="params">
            <h6>商品参数</h6>
            <p class="line"></p>
            <ul>
                <li>商品货号：{{info.goods_no}}</li>
                <li>库存情况：{{info.stock_quantity}}</li>
                <li>上架时间：{{info.add_time | datefmt('YYYY-MM-DD')}}</li>
            </ul>
        </div>

        <!--3.0 图文详情-->
        <!--4.0 商品评论-->
        <div id="other">
            <router-link v-bind="{to:'/goods/goodsdesc/'+id}">
                <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
            </router-link>
            <router-link v-bind="{to:'/goods/goodscomment/'+id}">
                <mt-button type="danger" size="large">商品评论</mt-button>
            </router-link>
        </div>
    </div>
</template>


<script>

    import {Toast} from "mint-ui";
    import common from "../../kits/common.js";
    import slider from "../subcom/slider.vue"

    export default {
        data() {
            return {
                id: 0,
                info: {}
            }
        },
        methods: {
            getinfo() {
                this.$http.get(common.apidomain + "/api/goods/getinfo/" + this.id).then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                        }
                        this.info = res.body.message[0];
                    }
                );
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.imgurl = common.apidomain + "/api/getthumimages/" + this.id;
            this.getinfo()
        },
        components: {
            slider
        }
    }
</script>


<style scoped>
    .silder {
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        margin: 5px;
    }

    #buy, #params, #other {
        margin: 5px;
        padding: 5px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 5px;
    }

    .line {
        height: 1px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    #buy ul, #params ul {
        padding-left: 0px;
    }

    #buy h4 {
        color: #0094ff;
        padding: 5px;
    }

    #buy li, #params li {
        list-style: none;
        padding: 8px;
    }

    #buy .price span {
        color: red;
    }

    #other .imgdesc {
        margin-bottom: 20px;
    }
</style>