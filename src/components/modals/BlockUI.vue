<template>
    <div v-if="data">
        <div class="overlay" v-if="data.display">
            <div class="card text-center">
                <div class="loader">
                    <img class="img-responsive" src="@/assets/loader.png">
                </div>
                <h3 class="title">
                    {{data.title}}
                </h3>
                <h4 v-if="data.subtitle.length" class="subtitle">
                    {{data.subtitle}}
                </h4>
                <p class="description">{{data.description}}</p>
                <span class="cancel-button" v-on:click="cancel">Cancel</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BlockUI",
    props:["data"],
    components:{
    },
    data(){
        return {
            // display: "show"
        }
    },
    methods:{
        cancel(){
            this.display = "hide";
            this.$emit("cancel",true);
        }
    }
}
</script>
<style scoped>
    .overlay{
        font-family: calibri;
        position:fixed;
        top:0;
        left:0;
        z-index:999;
        background:#00000050;
        height:100%;
        width:100%;
    }
    .overlay .card{
        text-align:center;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
        padding:35px;
        background:#FFF;
        max-width:500px; 
                    
    } 
    .overlay .card .loader{
        padding-bottom:20px;
    }
    .overlay .card .loader img{
        display:block;
        width:50px;
        margin:auto;
        text-align:center
    }
    .overlay .card .title{
        color:#000;
    }
    .overlay .card .subtitle{
        color:#777;
    }
    .overlay .card .description{ 
        font-size:12px;
        color:#777;
        padding-bottom: 20px;
    }
    .overlay .cancel-button{
        font-weight:bold;
        color:#000;
        cursor:pointer;
    }
</style>
