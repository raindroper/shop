<!-- coded by Rae -->
<template>
    <div id="subtmpl">
        <div class="inleft div" @click="sub">-</div>
        <div class="incenter div" v-text="count"></div>
        <div class="inright div" @click="add">+</div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                count: 0,
                id: 0
            }
        },
        methods: {
            //加1操作
            add() {
                this.count++;
                this.sendcount();
            },
            //减1操作
            sub() {
                if (this.count <= 1) {
                    return
                }
                this.count--;
                this.sendcount();
            },

            //将数据送出
            sendcount() {
                this.$emit("send", [this.count,this.id]);
            },
            //遍历数据寻找当前id的商品
            findId() {
                this.localcount.forEach(function (e, i, a) {

                })
            }
        },
        props: ["localcount", "itemid"],
        created() {
            //将本地的商品数量传进来
            this.id = this.itemid;
            this.count = this.localcount[this.id];
        }
    }
</script>


<style scoped>
    #subtmpl .div {
        width: 40px;
        height: 25px;
        line-height: 25px;
        display: inline-block;
        border: 1px solid #000000;
        text-align: center;
    }
</style>