<!-- coded by Rae -->
<template>
    <div id="tmpl">
        <comment :id="id"></comment>
    </div>
</template>


<script>
    import comment from "../subcom/comment.vue";

    export default {
        data() {
            return {
                id:0
            }
        },
        methods: {},
        created() {
            this.id = this.$route.params.id;
        },
        components : {
            comment
        }
    }
</script>


<style scoped>

</style>