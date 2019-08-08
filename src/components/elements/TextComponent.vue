<template>
    <div class="text-component">
        <label>{{label}}</label>
        <text-box :value="value"/>
    </div>
</template>
<script>
import TextBox from '../core/TextBox'
export default {
    name: "TextComponent",
    props:{ 
        label: {type: String, default: "Text Component"},
        value: {type: String, default: ""}
    },
    components:{
        'text-box': TextBox
    },
    data(){
        return {}
    },
    created(){},
}
</script>
<style scoped>
    .text-component{

    }
</style>


