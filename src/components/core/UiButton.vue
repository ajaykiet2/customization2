<template>
    <div>
        <button v-if="type==='btn'" class="ui-button" v-on:click=clicked>
            {{label}}
        </button>
        <div v-if="type==='link'" class="link">
            <a :href="url">{{label}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "UiButton",
    props:{
        label: {type: String, required: true, default: "Button"},
        url: {type: String, default:"#"},
        type: {type: String, default:"btn"}
    },
    methods:{
        clicked(){
            this.$emit("click",{btn: this.label});
        }
    }
}
</script>

<style scoped>
    .link a{
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        color:#666;
    }
    .ui-button{
        padding:6px 15px;
        background:#AAA;
        text-align: center;
        color:#000;
        border-radius:3px;
        cursor:pointer;
        font-size:12px;
        border:none;
    }
    .ui-button:focus, .ui-button:active{
        outline: none;
    }
    .ui-button:hover{
        background:#999;
        color:#000;
    }
</style>
