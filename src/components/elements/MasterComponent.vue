<template>
    <div v-if="!errors.length && component">
        <text-component v-if="component.component_type === 'text'" :label="component.label" :value="component.action_text"/>
        <image-component v-if="component.component_type === 'image'" :label="component.label" :value="component.action_text"/>
    </div>    
</template>

<script>
// import all required element components
import TextComponent from './TextComponent'
import ImageComponent from './ImageComponent'

import { mapState } from 'vuex'

export default {
    name: "MasterComponent",
    props:{
        component_id: { type: String, required: true }
    },
    components:{
        TextComponent,
        ImageComponent
    },
    computed: mapState({
        component(state){
            return state.template.tpl_components.find(cmpnt => cmpnt.component_id === this.component_id)
        },
        errors(state){
            return state.template.errors
        }
    }),
    created(){
        this.$store.dispatch('template/getComponentConfiguration',this.component_id);
    }
}
</script>

<style>

</style>
