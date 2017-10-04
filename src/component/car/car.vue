<template>
    <div id="tmpl">
        <div class="row" v-for="(item,index) in datalist">
            <mt-switch class="switch" v-model="value[index]"></mt-switch>
            <img :src="item.thumb_path" class="img">
            <div class="inforight">
                <h4 v-text="item.title"></h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{item.sell_price}}
                        <li>
                            <carinput :localcount="itemlist" :itemid=item.id @send="savelocal"></carinput>
                        </li>

                        <li><a href="#">删除</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {{value}}

        <div>
            总价:￥{{totalprice}},共{{totalcount}}件
        </div>
    </div>
</template>


<script>

    import {Toast} from "mint-ui";
    import common from "../../kits/common.js";
    import {concatid, savelocal} from "../../kits/local.js";
    import carinput from "../subcom/carinput.vue"

    export default {
        data() {
            return {
                value: [],
                itemlist: [],
                datalist: [],
                idstr: "",
                totalprice: 0
            }
        },
        methods: {

            //将修改后的count保存到本地,同步datalist中的count
            savelocal: function (input) {
                this.itemlist[input[1]] = input[0];
                savelocal(this.itemlist);
                this.datalist.forEach(function (e, i, a) {
                    if (input[1] === e.id) {
                        e.cou = input[0];
                    }
                })
            },

            //获取本地的购物车数据
            getid() {
                this.itemlist = JSON.parse(localStorage.getItem("goodsitem"));
                this.idstr = concatid(this.itemlist);
            },

            //获取服务器中购物车内商品的详情
            getdata() {
                this.$http.get(common.apidomain + "/api/goods/getshopcarlist/" + this.idstr).then(
                    res => {
                        this.datalist = res.body.message;
                    }
                )
            }
        },
        computed: {
            totalcount() {
                var trueArr = this.value.filter(function (item) {
                    return item;
                });
                var amountcount = 0;
                var amountprice = 0;
                this.value.forEach((e, i, a) => {
                    if (e) {
                        var count = +this.datalist[i].cou;
                        console.log(this.datalist[i]);
                        var price = +this.datalist[i].sell_price;
                        amountprice += count * price;
                        amountcount += count;
                    }
                });
                this.totalprice = amountprice;
                return amountcount;
            }
        },
        created() {
            this.getid();
            this.getdata();
        },
        components: {
            carinput
        }
    }
</script>


<style scoped>
    .row {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 102px;
        display: flex;
        padding: 5px;
    }

    .switch {
        flex: 0 0 52px;
    }

    .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
    }

    .inforight {
        margin-left: 5px;
        flex: 1;
    }

    .inforight ul {
        padding-left: 0px;
    }

    .inforight li {
        list-style: none;
        display: inline-block;
    }

    .inforight h4 {
        color: #0094ff;
        font-size: 14px;
    }

    .bottom li:first-child {
        color: red;
        margin-right: 5px;
    }

    .bottom li:last-child {
        margin-left: 5px;
    }
</style>