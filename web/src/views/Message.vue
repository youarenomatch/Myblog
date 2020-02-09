<template>
    <div>
        留言
    </div>
</template>

<script>
    export default {
        data(){
            return{
                posion:[]
            }
        },
        methods:{
            async fetchPosion(){
            const res=await this.$http.get('http://jsonplaceholder.typicode.com/posts')
            this.posion=res.data
            console.log(this.posion)
        }
        },
        created(){
            this.fetchPosion()
        }
    }
</script>

<style  scoped>

</style>
