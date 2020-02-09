<template>
    <div>
        <h2>{{model.title}}</h2>
        <p v-html="model.body">{{model.body}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:this.$route.params.id,
                model:{}
            }
        },
        methods:{
             async fetchList(){
            const res=await this.$http.get('/page/'+this.id)
            this.model=res.data
            // console.log(this.newsCats)
        }
        },
        created(){
            this.fetchList()
        }
    }
</script>

<style lang="scss" scoped>

</style>