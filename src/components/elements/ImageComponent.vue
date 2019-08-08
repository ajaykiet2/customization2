<template>
    <div class="image-wrapper">
        <label>{{label}}</label>
        <input type="file" />
    </div>
</template>

<script>
export default {
    name: "ImageComponent",
    props:{
        label: { type: String, default: "Upload Image"}
    }
}
</script>

<style>
    .image-wrapper{
        width:100%;
    }
    input[type=file] {
        width: 100%;
        padding: 5px 10px;
        margin: 2px 0 8px 0;
        border: 1px solid #999;
        border-radius: 3px; 
        box-sizing: border-box;
    }
</style>
