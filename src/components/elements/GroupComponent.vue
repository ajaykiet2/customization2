<template>
    <div>
        <div class="tree-group">
            <div class="group-btn" :class="btnStatus" v-on:click="show = !show; btnStatus = show ? 'active' : ''">
                <span>{{label}}</span>
            </div>
            <expendable>
                <div v-if="show" class="expendable-content">
                    <div class="contents">
                        <slot/>
                    </div>
                </div>
            </expendable>
        </div>
    </div>
</template>


<script>
// Import all types of components
import Expendable from '../core/Expendable'

// Registering group component
export default {
    name: "GroupComponent",
    props:{
        label: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            show: true,
            btnStatus : "active",
        }
    },
    components:{
        Expendable,
    },
    methods:{
    },
}

</script>
<style scoped>
*{
    font-family: calibri;
}
.contents{
    padding:10px;
}
.tree-group{
    margin-bottom: 10px;
}
.expendable-content{
    background: #FAFAFA;
    border-radius: 0 0 3px 3px;
}
.group-btn{
    clear: both;
    cursor: pointer;
    position:relative;
    color:#777;
    background: #FFF;
    font-weight:bold;
    padding:5px 7px;
    border-radius:3px;
}
.group-btn:hover{
    background:#EEE;
}
.group-btn.active{
    background:#666;
    border-radius: 3px 3px 0 0;
    color:#FFF;
}
.group-btn.active:after{
    content: "\2212";
    color: #FFF;
}
.group-btn:after{
    content: '\002B';
    color: #777;
    font-weight: bold;
    font-size: 16px;
    float: right;
    margin-left: 5px;
}
</style>
