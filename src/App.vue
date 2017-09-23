<template>
    <div>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <mt-button size="large" type="danger" @click="tip">button</mt-button>
        <router-view></router-view>
    </div>
</template>


<script>
    //导入Toast
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                msg: "hello"
            }
        },
        methods: {
            tip : ()=>Toast('RRrsss'),
        },
        created() {

        }
    }
</script>


<style scoped>
    div {
        background-color: red;
    }
</style>