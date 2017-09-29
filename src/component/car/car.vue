<template>
    <div id="tmpl">
        <div class="row" v-for="(item,index) in datalist">
            <mt-switch class="switch" v-model="value[index]"></mt-switch>
            <img :src="item.thumb_path" class="img">
            <div class="inforight">
                <h4 v-text="item.title"></h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{item.sell_price}}</li>
                        <li>购买数量组件</li>
                        <li><a href="#">删除</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {{value}}
    </div>
</template>


<script>

    import {Toast} from "mint-ui";
    import common from "../../kits/common.js";
    import {concatid} from "../../kits/local.js"

    export default {
        data() {
            return {
                value: [],
                itemlist: [],
                datalist: [],
                idstr: ""
            }
        },
        methods: {
            getid() {
                this.itemlist = JSON.parse(localStorage.getItem("goodsitem"));
                this.idstr = concatid(this.itemlist);
            },
            getdata() {
                this.$http.get(common.apidomain + "/api/goods/getshopcarlist/" + this.idstr).then(
                    res => {
                        this.datalist = res.body.message;
                    }
                )
            }
        },
        created() {
            this.getid();
            this.getdata();
        }
    }
</script>


<style scoped>
    .row {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 102px;
        display: flex;
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
        margin-right: 10px;
    }

    .bottom li:last-child {
        margin-left: 10px;
    }
</style>