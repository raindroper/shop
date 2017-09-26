<template>
    <div id="tmpl">
        <div id="cate">
            <ul v-bind="{style:'width:'+ulwidth+'px'}">
                <li @click="getimg(0)">全部</li>
                <li v-for="item in catelist" @click="getimg(item.id)">{{item.title}}</li>
            </ul>
        </div>

        <div id="imglist">
            <ul>
                <li v-for="item in imglist">
                    <router-link v-bind="{to:'photoinfo/'+item.id}">
                        <img v-lazy="item.img_url">
                        <div id="desc">
                            <h5 v-text="item.title"></h5>
                            <p v-text="item.zhaiyao"></p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import common from "../../kits/common.js"
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                catelist: [],
                ulwidth: 320,
                imglist: []
            }
        },
        methods: {
            getcates() {
                this.$http.get(common.apidomain + "/api/getimgcategory").then(
                    res => {
                        if (res.body.status !== 0) {
                            Toast("请求失败");
                            return
                        }
                        this.catelist = res.body.message;
                        this.ulwidth = (this.catelist.length + 1 ) * 62;
                    }
                )
            },
            getimg(cateid) {
                this.$http.get(common.apidomain + "/api/getimages/" + cateid).then(
                    res => {
                        this.imglist = res.body.message;
                        console.log(this.imglist);
                    }
                )
            }
        },
        created() {
            this.getcates();
            this.getimg(0);
        }
    }
</script>


<style scoped>
    #cate {
        width: 375px;
        max-width: 375px;
        overflow-x: auto;
    }

    #cate ul {
        margin: 0px;
        padding-left: 10px;
    }

    #cate li {
        list-style: none;
        display: inline-block;
        color: #0094ff;
        font-size: 14px;
        padding-left: 6px;
    }

    #imglist {

    }

    #imglist ul {
        padding-left: 0px;
    }

    #imglist li {
        list-style: none;
        position: relative;
    }

    #imglist img {
        width: 100%;
        height: 300px;
    }

    #desc {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        bottom: 2px;
        left: 0px;
    }

    #desc h5 {
        color: #ffffff;
        font-weight: bold;
    }

    #desc p {
        color: #fff;
    }

    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>