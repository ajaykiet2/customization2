<template>
  <div>
    <MergeTag :display="mergeTag" :component_id="selectedComponent" :prefilled="prefilled" :title="tagTitle" :key="Math.random()" @cancelTags="cancelTags" @saveTags="saveTags"></MergeTag>
    <div class="component-tree">
      <group-component 
        v-for="(group, gIndex) in groups" 
        :key="group.group_id"
        :index="gIndex"
        :label="group.label"
        :data="group"
      >
        <text-component
          v-for="(component, index) in components"
          :data="component"
          :val="componentValue"
          :index="index"
          :component_id="component.component_id"
          :key="component.component_id"
          :label="component.label"
          :type="component.component_type"
          :suggestions="component.suggestions"
          :required="component.required"
          placeholder="Enter Your Value"
          @openMergeTags="openMergeTags"
        ></text-component>
      </group-component>
      <!-- <profile-component></profile-component> -->
    </div>
    <div class="bottom-buttons">
      <button type="button" v-on:click="preview" class="btn btn-sm m-r-5">Preview my Creative</button>
      <button type="button" class="btn btn-sm">Reset Customizations</button>
    </div>
    <p class="tree-help-text">
      Previewing your creative sends all of your customization options to our rendering engine. Once we have this data, we'll create a proof for you that you can review on the right side of this page. This will help ensure accuracy with your creative.
    </p>
  </div>  
</template>
<script>
import {mapState} from 'vuex'
import GroupComponent from './GroupComponent.vue'
import TextComponent from './TextComponent.vue'
import ProfileComponent from './ProfileComponent.vue'
import MergeTag from '../modals/MergeTag'

export default {
  name: "TreeComponent",
  props:{
    template_id:{
      type: String,
      required: true
    },
    assignment_id:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      show: false,
      mergeTag: false,
      tagTitle: "",
      refId: "",
      prefilled: "",
      selectedComponent: "",
      componentValue: ""
    }
  },
  components: {
    MergeTag,
    GroupComponent,
    TextComponent,
    ProfileComponent
  },
  computed: mapState([
    "components",
    "groups"
  ]),
  methods:{
    preview(){
      this.$emit("preview",{});
    },
    openMergeTags(data){
      this.mergeTag = true;
      this.tagTitle = data.title;
      this.prefilled = data.prefilled;
      this.selectedComponent = data.element;
    },
    saveTags(tagData){
      this.selectedComponent.querySelector(".input-box").innerHTML = tagData.displayValue;
      this.mergeTag = false;      
    },
    cancelTags(){
      this.mergeTag = false;
    }
  }
}
</script>
<style scoped>
.m-r-5{
  margin-right: 5px;
}
.btn{
    font-weight: bolder;
    font-family: calibri;
    padding: 3px 5px;
    text-align: center;
    font-size: 12px;
    background: #ccc;
    min-width:70px;
}
.btn:hover{
  background: #bdbaba;
}
.tree-help-text{
  font-size: 11px;
  color:#999;
  line-height: 11px;
}
.bottom-buttons{
  margin-top:40px;
  margin-bottom:20px;
}

.component-tree::-webkit-scrollbar {
    width: 4px;
}
.component-tree::-webkit-scrollbar-track {
    background:#EEE;
}
.component-tree::-webkit-scrollbar-thumb {
    background:#CCC
}
.component-tree{
  max-height:400px;
  overflow-y: scroll;
  padding-right:30px;
}
</style>



