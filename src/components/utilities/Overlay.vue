<template>
    <div class="overlay" v-if="display">
        <div class="overlay-content">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    name: "Overlay",
    props:{
        display:{
            type: Boolean,
            default: false
        }
    },
}
</script>
<style scoped>
    .overlay{
        position:fixed;
        height:100%;
        width:100%;
        background-color: #00000070;
        z-index: 9;
        top:0;
        left:0;
    }
    .overlay .overlay-content{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
</style>

