//导入Vue
import Vue from "vue";

//导入对象
import App from "./App.vue";

//导入vueRouter
import vueRouter from "vue-router";

//绑定vueRouter
Vue.use(vueRouter);

//导入mint-ui的css文件
import "mint-ui/lib/style.min.css"

//导入mint-ui
import Mint from "mint-ui";

//绑定mint-ui
Vue.use(Mint);

//导入component
import login from "./component/account/login.vue";
import register from "./component/account/register.vue";

//定义路由规则
var router = new vueRouter({
    routes : [
        {
            path : "/login",
            component : login
        },
        {
            path : "/register",
            component : register
        }
    ]
});

//利用Vue对象进行渲染
new Vue({
    el : "#app",
    router,
    render : c=>c(App)

})