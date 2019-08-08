<template>
    <div class="text-wrapper">
        <input class="text-box" type="text" name="textelement" :value="value">
    </div>
</template>
<script>
export default {
    name: "TextBox",
    props: {
        value: {type: String, default: ""}
    },
}
</script>
<style scoped>
    .text-wrapper{
        width:100%;
    }
    input[type=text] {
        width: 100%;
        padding: 5px 10px;
        margin: 2px 0 8px 0;
        border: 1px solid #999;
        border-radius: 3px; 
        box-sizing: border-box;
    }
</style>

