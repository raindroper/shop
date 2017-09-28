<!-- coded by Rae -->
<template>
    <div id="tmpl" ref="box">
        <transition name="show"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter">
            <div class="ball" v-if="isshow"></div>
        </transition>
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
                <li class="inputli">
                    购买数量：
                    <inputNumber class="input-number" @send="getcount"></inputNumber>

                </li>

                <li>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="send">加入购物车</mt-button>
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
    import slider from "../subcom/slider.vue";
    import inputNumber from "../subcom/inputNumber.vue";
    import {setlocal} from "../../kits/local.js";

    export default {
        data() {
            return {
                scrollheight: 0,
                isshow: false,
                id: 0,
                info: {},
                count: 0
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
            },
            getcount(input) {
                this.count = input;
            },
            send() {
                this.$emit("send", this.count);
                setlocal({
                    id: this.id,
                    count: this.count
                });
                this.scrollheight = this.$refs.box.offsetParent.scrollTop;
                this.isshow = !this.isshow;
            },
            beforeEnter(el) {
                el.style.position = "absolute";
                el.style.left = "170px";
                el.style.top = "400px";
            },
            enter(el,done){
                el.offsetWidth;
                el.style.left = "250px";
                el.style.top = 600 + this.scrollheight + "px";
                done();
            },
            afterEnter(el){
                this.isshow = !this.isshow;
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.imgurl = common.apidomain + "/api/getthumimages/" + this.id;
            this.getinfo()
        },
        components: {
            slider,
            inputNumber
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

    .inputli {
        position: relative;
    }

    .input-number {
        position: absolute;
        left: 100px;
        top: 5px;
    }

    .ball {
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 50%;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
        z-index:9999;
        position: absolute;
    }
</style>