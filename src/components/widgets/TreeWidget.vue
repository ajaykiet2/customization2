<template>
    <div class="tree-container">
        <div class="tree-components">
            <group-component v-for="group in template_data" :key="group.group_id" :label="group.label">
                <master-component v-for="component_id in group.components" :key="component_id" :component_id="component_id"></master-component>
            </group-component>
        </div>
        <div class="actions">
            <ui-button label="Preview Creatives" type="btn"/>
            <ui-button label="Reset Creatives" type="btn"/>
        </div>
    </div>
</template>
<script>
import UiButton from '../core/UiButton'
import GroupComponent from '../elements/GroupComponent'
import MasterComponent from '../elements/MasterComponent'
export default {
    name: "TreeWidget",
    props: {
        template_data: {type: Array, required: true}
    },
    components:{
        'ui-button'         : UiButton,
        'group-component'   : GroupComponent,
        'master-component'    : MasterComponent
    },

    created(){
        // console.log(this.template_data);
    }
}
</script>
<style scoped>
    .tree-container{}
    
    .tree-components::-webkit-scrollbar {
        width: 4px;
    }
    .tree-components::-webkit-scrollbar-track {
        background:#EEE;
    }
    .tree-components::-webkit-scrollbar-thumb {
        background:#CCC
    }
    .tree-components{
        max-height:500px;
        overflow-y: scroll;
        padding-right:15px;
    }

    .actions{
        margin: 40px auto;
        display: flex;
        justify-content: space-between;
    }
</style>


