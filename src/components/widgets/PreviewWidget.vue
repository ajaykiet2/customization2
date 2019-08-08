<template>
    <div class="preview-container">
        <div class="preview-item">
            <img class="responsive" src="../../assets/placeholder.png"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "PreviewWidget",
    props: {},
    methods:{

    }
}
</script>
<style scoped> 
    .preview-container{
        padding-left: 15px;
    }  
    .preview-item {} 
    img.responsive {
        width: 100%;
        height: auto;
    }
</style>


