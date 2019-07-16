<template>
  <div>
    <SignoffModal :show="signoff" @close="closeModal" @approve="approve"></SignoffModal>
    <div class="tree-heading">
      <div class="row">
        <div class="col-sm-8">
          <span class="heading-text">Customize Your Creative</span>
        </div>
        <div class="col-sm-4 text-right step-buttons">
          <button type="button" class="btn btn-sm m-r-5">Back</button>
          <button type="button" class="btn btn-sm" v-on:click="getSignoff">Continue</button>
        </div>
        <div class="col-sm-12">
          <div class="default-message">
            We have prefilled customizations on this template based on your default settings. Please be sure to review before continuing.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <tree-component :template_id="template_id" :assignment_id="assignment_id" @onreset="resetTree" @preview="preview"></tree-component>
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-2">
            <p class="label-text">Pages</p>
            <div class="row">
              <div class="col-sm-12 col-xs-6 page-image">
                <img src="../../assets/placeholder.png" class="img-responsive page-image">
                <p class="tree-help-text text-center">Frontside</p>
              </div>
              <div class="col-sm-12 col-xs-6">
                <img src="../../assets/placeholder.png" class="img-responsive page-image">
                <p class="tree-help-text text-center">Backside</p>
              </div>
            </div>
          </div>
          <div class="col-sm-10">
            <p class="label-text">Your Design</p>
            <img src="../../assets/placeholder.png" class="img-responsive page-image" width="100%">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeComponent from '../elements/TreeComponent'
import SignoffModal from '../modals/SignoffModal'
import { mapState } from 'vuex';
export default {
  name: 'PreviewComponent',
  props:{
    template_id:{
      type: String,
      required: true
    },
    assignment_id:{
      type: String,
      // required: true
    },
  },
  data(){
    return {
      show: false,
      signoff: false
    }
  },
  components: {
    SignoffModal,
    TreeComponent,
  },
  computed:mapState([
    "groups",
    "components"
  ]),
  mounted(){
    // window.console.log("Mounted Called")
  },
  methods:{
    getSignoff(){
      this.signoff = true;
    },
    closeModal(){
      this.signoff = false;
    },
    approve(){
      this.signoff = false;
      alert("approved");
    },
    resetTree(){

    },
    preview(){
      this.$emit("loading",{})
    }
  }
}
</script>

<style scoped>
  .page-image{
    margin-bottom:10px;
  }
  .step-buttons{
    padding-top:8px;
  }
  .tree-heading{
    padding:20px 0;
    background:#FFF;
  }
  .heading-text{
    font-size: 26px;
    font-weight:bold;
    font-family: calibri;
  }
  .label-text{
    font-size:13px;
    font-weight: bold;
    font-family:calibri;
  }
  .tree-help-text{
    font-size: 11px;
    color:#999;
    line-height: 11px;
  }
  .page-image{
    margin-bottom:10px;
  }
  .page-image:hover{
    cursor: pointer;
  }
  .btn.m-r-5{
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
  .default-message{
    background:rgb(220, 220, 220);
    margin-top:10px;
    text-align:center;
    color:#888;
    padding:7px;
    border-radius:2px;
    font-size:12px;
  }
</style>

