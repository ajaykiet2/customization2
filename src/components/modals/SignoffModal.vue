<template>
    <div class="overlay" v-if="show">
        <div class="popup modal-lg">
            <div class="row">
                <div class="col-sm-5 p-r-0">
                    <div class="row">
                        <div class="col-sm-2 p-r-0">
                            <div class="row">
                                <div class="col-sm-12 col-xs-6">
                                    <img src="@/assets/preview.png" class="img-responsive page-thumb">
                                </div>
                                <div class="col-sm-12 col-xs-6">
                                    <img src="@/assets/preview.png" class="img-responsive page-thumb">
                                </div>
                            </div>                            
                        </div>
                        <div class="col-sm-10 p-r-0">
                            <img src="@/assets/preview.png" class="img-responsive page-image">
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 p-l-45">
                    <div class="title">Approve your design for production</div>
                    <div class="description">We want to make sure your happy with your design before preducing it for you. Please review your creative and when you're ready, select the person responsible for this order. That way we know who to connect if we have any questions during production.</div>
                    <p v-on:click="close" class="link">Wait a second... I need to make some changes first.</p>
                    <label class="signoff">Sign off on creative</label>
                    <select class="input-sm">
                        <option>Select a responsible for this order</option>
                        <option>Select a responsible for this order responsible </option>
                    </select>
                    <button class="btn btn-sm signoff-btn" v-on:click="approve">Everything looks good. I approve!</button>
                    <p class="important-note">Important note: By signing off on this creative etc etc.</p>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SignoffModal",
    props:{
        show: { type: Boolean, default: false }
    },
    methods:{
        close(){
            this.$emit("close",{})
        },
        approve(){
            this.$emit("approve",{});
        }
    }
}
</script>

<style scoped>

.p-r-0{
    padding-right: 0;
}
.p-l-0{
    padding-left: 0;
}
.p-r-20{
    padding-right:20px;
}
.p-l-45{
    padding-left:45px;
}
.overlay {
    top:0;
    left:0;
    width: 100%;
    height:100%;
    position:fixed;
    z-index:999;
    background:#00000030;
}
.overlay .popup {
    max-width:800px;
    background: #FFF;
    padding:35px 25px;
    padding-bottom:50px;
    position:absolute;
    border:1px solid #FFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)   
}
.title {
    font-size: 22px;
    color:#000;
    font-weight: 400;
    line-height: 22px;
}
.description {
    padding:20px 0;
    line-height: 16px;
    font-size: 11px;
}
.link {
    font-size: 11px;
    color:#509ff8;
    cursor: pointer;
}
.signoff {
    font-size: 12px;
}
.signoff strong {
font-weight: 800;
}
.input-sm {
    border-radius: 0;
    border:1px solid #DDD;
}
.signoff-btn {
    padding:3px 20px;
    background: #ccc;
    margin:10px 0;
}
.important-note {
    color:#999;
    font-size: 10px;
}
.page-image{
    width:100%;
}
.page-thumb{
    margin-bottom:10px;
    width:100%;
}
</style>

