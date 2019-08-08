<template>
    <div class="error-container">
        <slot class="title" name="title" />
        <slot class="message" name="message" />
        <slot class="details" name="details" />
    </div>
</template>

<script>
export default {
    name: 'ErrorLayout',
}
</script>

<style>
    .error-container{
        background: #FFF;
        border-radius: 4px;
        padding: 15px;
    }
    .title{
        display:block;
        font-size: 36px;
        color:#999;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .message{
        display: block;
        font-style: italic;
        font-size: 20px;
        color:#AA0000;
    }
    .details{
        margin: 10px 0;
        display: block;
        background: #EEE;
        color:#000;
        padding:10px;
    }
</style>
