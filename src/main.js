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

//导入全局css
import "../statics/css/site.css"

//导入component
import home from "./component/home.vue";
import car from "./component/car/car.vue";
import goods from "./component/goods/goods.vue";
import news from "./component/news/newslist.vue";
import photo from "./component/photo/photo.vue";
import newsinfo from "./component/news/newsinfo.vue";
import photoinfo from "./component/photo/photoinfo.vue";
import goodsinfo from "./component/goods/goodsinfo.vue";
import goodsdesc from "./component/goods/goodsdesc.vue";
import goodscomment from "./component/goods/goodscomment.vue";

//导入mui样式文件
import "../statics/css/mui.min.css";

//引入vue-resource
import vueResource from "vue-resource";

Vue.use(vueResource);

//导入moment 日期格式化工具
import moment from "moment";

Vue.filter("datefmt", function (input, fmtString) {
    return moment(input).format(fmtString);
});
//导入VuePreview
import VuePreview from "vue-preview";

Vue.use(VuePreview);

//定义路由规则
var router = new vueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: home
        },
        {
            path: "/car",
            component: car
        },
        {
            path: "/goods/goodslist",
            component: goods
        },
        {
            path: "/news/newslist",
            component: news
        },
        {
            path: "/photo/photolist",
            component: photo
        },
        {
            path: "/news/newsinfo/:id",
            component: newsinfo
        },
        {
            path: "/photo/photoinfo/:id",
            component: photoinfo
        },
        {
            path: "/goods/goodsinfo/:id",
            component: goodsinfo
        },
        {
            path: "/goods/goodsdesc/:id",
            component: goodsdesc
        },
        {
            path: "/goods/goodscomment/:id",
            component: goodscomment
        }
    ],
    linkActiveClass: "mui-active"
});

//利用Vue对象进行渲染
new Vue({
    el: "#app",
    router,
    render: c => c(App)

})