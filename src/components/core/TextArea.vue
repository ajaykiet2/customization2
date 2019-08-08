<template>
    <div class="area-wrapper">
        <textarea class="text-area" name="textarea">
            {{value}}
        </textarea>
    </div>
</template>

<script>
export default {
    name: "TextArea",
    props:{
        value:{ type: String, default:""}
    }
}
</script>

<style>

</style>
