<!-- coded by Rae -->
<template>
    <div id="tmpl">
        <slider :imgurl="imgurl"></slider>
        {{id}}
    </div>
</template>


<script>

    import {Toast} from "mint-ui";
    import common from "../../kits/common.js";
    import slider from "../subcom/slider.vue"

    export default {
        data() {
            return {
                id : 0
            }
        },
        methods: {},
        created() {
            this.id = this.$route.params.id;
            this.imgurl = common.apidomain + "/api/getthumimages/" + this.id;
        },
        components: {
            slider
        }
    }
</script>


<style scoped>

</style>