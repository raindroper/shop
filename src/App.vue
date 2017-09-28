<template>
    <div>
        <mt-header fixed title="固定在顶部"></mt-header>
        <router-view @send="getcount"></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-chat">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/car">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">{{goodscount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                msg: "hello",
                goodscount: 0
            }
        },
        methods: {
            getcount(input) {
                this.goodscount = input;
            }
        },
        created() {

        }
    }
</script>


<style scoped>

</style>