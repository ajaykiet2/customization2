<template>
  <div>
    <div class="text-component">
      <div class="form-group" v-if="type === 'text'">
        <div class="pull-left"><label for="textBox">{{label}}<span v-if="required" class="required">*</span></label></div>
        <div class="pull-right" v-if="mergeTag"><label class="merge-tag" title="Merge Tags" @click="openMergeTags">$|</label></div>
        <div class="clearfix"></div>
        <div contenteditable="true" :type="type" :ref="component_id" class="input-box form-control input-sm" id="textBox" :placeholder="placeholder" >{{value}}</div>
      </div>
      <div class="form-group" v-else-if="type === 'textarea'">
        <label for="textBox">{{label}}<span class="required" v-if="required" >*</span></label>
        <textarea class="form-control" id="textBox" :placeholder="placeholder"></textarea>
      </div>
      <div class="form-group" v-else-if="type === 'select'">
        <label for="textBox">{{label}}<span class="required" v-if="required">*</span></label>
          <select class="form-control input-sm">
            <option v-for="suggestion in suggestions" :key="suggestion">{{suggestion}}</option>
          </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TextComponent',
  props: {
    label: String,
    type:{ type: String, required : true },
    component_id: String,
    val:String,
    suggestions:{ type: Array},
    placeholder: String,
    required:{ type: Boolean, default: false },
    mergeTag:{ type: Boolean, default: true }
  },
  data(){
    return {value: this.val}
  },
  methods:{
    openMergeTags(){
      this.$emit("openMergeTags",{title: this.label, prefilled: this.value,element: this.$el})
    }
  }
}
</script>
<style scoped>
  .form-group{
    margin-bottom: 0px;
  }
  .form-control{
    padding:5px;
    border-radius:2px;
    border:1px solid #ccc;
    width:100%;
  }
  label{
    margin-top:5px;
    font-family: calibri;
    font-weight: bold;
    font-size: 13px;
  }
  .required{
    color:#FF0000;
    font-size:10px;
    font-weight:100;
  }
  .merge-tag{
    color:#fff;
    background:tomato;
    padding:0 3px;
    font-size: 13px;
    margin-top:5px;
    line-height:16px;
    border-radius:2px;
    display:none;
    cursor: pointer;
  }
  .text-component{
    margin:5px 0;
  }
  .text-component:hover .merge-tag{
    display: block;
  }
</style>
