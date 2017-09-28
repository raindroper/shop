<!-- coded by Rae -->
<template>
    <div id="subtmpl">
        <div class="inleft div" @click="sub">-</div>
        <div class="incenter div" v-text="count"></div>
        <div class="inright div" @click="add">+</div>
    </div>
</template>


<script>

    import {bus} from "../goods/eventbus.js"

    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            add() {
                this.count++;
                bus.$emit("sendCount",this.count);
            },
            sub() {
                if (this.count <= 0) {
                    return
                } else {
                    this.count--;
                    bus.$emit("sendCount",this.count);
                }
            },
            created() {

            }
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