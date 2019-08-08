<template>
    <div class="customization-container">
        <div class="customization-header">
            <div class="heading">
                Customization
            </div>
            <div class="right-buttons">
                <ui-button label="◄ BACK" type="link"></ui-button>
                <div class="divider">|</div>
                <ui-button label="CONTINUE ►" type="link"></ui-button>
            </div>
        </div>
        <div class="customization-content">
            <div class="treeview">
                <tree-widget :template_data="template_data"/>
            </div>
            <div class="preview">
                <preview-widget/>
                <page-widget/>
            </div>
        </div>
        <div class="customization-footer">
            <div></div>
            <div class="right-buttons">
                <ui-button label="◄ BACK" type="link"></ui-button>
                <div class="divider">|</div>
                <ui-button label="CONTINUE ►" type="link"></ui-button>
            </div>
        </div>
    </div>
</template>
<script>
import UiButton from '../core/UiButton'
import TreeWidget from '../widgets/TreeWidget'
import PageWidget from '../widgets/PageWidget'
import PreviewWidget from '../widgets/PreviewWidget'
import {mapState} from 'vuex'
export default {
    name: "CustomizationLayout",
    computed: mapState({
        template_data: state => state.template.tree
    }),
    components:{
        'ui-button'         : UiButton,
        'tree-widget'       : TreeWidget,
        'page-widget'       : PageWidget,
        'preview-widget'    : PreviewWidget
    },
    methods:{},
    created(){
    }
}
</script>
<style scoped>
    *{font-family: calibri;}
    .customization-container{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background: #FFF;
        padding: 20px;
        border-radius:4px;
    }
    .customization-header, .customization-footer{
        margin:10px auto;
        display:flex;
        justify-content: space-between;
    }
    .heading{
        font-size: 25px;
        color:#000;
    }
    .right-buttons{
        display:flex;
        line-height: 25px;
        justify-content: space-between;
    }
    .m-r-5{
        margin-right:5px;
    }
    .m-l-5{
        margin-left:5px;
    }
    .divider{
        margin:0 10px;
    }
    .customization-content{
        display: flex;
        align-content: space-between;
    }
    .treeview{
        width:25%;
    }
    .preview{
        width:80%;
    }
</style>
