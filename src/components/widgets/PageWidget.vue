<template>
    <div class="pages-container">
        <div class="pages">
            <div class="item">
                <img class="responsive" src="../../assets/placeholder.png"/>
                <small>Front Side</small>
            </div>
            <div class="item">
                <img class="responsive" src="../../assets/placeholder.png"/>
                <small>Back Side</small>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageWidget",
    props: {},
    methods:{

    }
}
</script>
<style scoped> 
    .pages-container{
        padding: 10px 0;
    }  
    .pages {
        display:flex;
        justify-content: flex-start;
    }
    .pages .item{
        margin-left: 15px;
        max-width:100px;
        text-align:center;
        color:#999;
    } 
    img.responsive {
        width: 100%;
        height: auto;
    }

</style>


