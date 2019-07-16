<template>
  <div id="app">
    <block-UI 
      :data="loader"
      @cancel="cancelled"
    ></block-UI>
    <div class="container">
      <preview-component template_id="TM001" assignment_id="TA001" @loading="loading"></preview-component>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import PreviewComponent from './components/wrappers/PreviewComponent.vue'
import BlockUI from './components/modals/BlockUI'
import store from './store'
export default {
  name: 'Customization',
  store,
  data(){
    return {
      loader:{
        display: false,
        title: "Hold tight!",
        subtitle: "We are applying default profile to this template",
        description: "We're currently rendering your creative. Please be patient. If something goes wrong, we'll tell you. This can sometimes take up to 30 seconds." 
      }
    }
  },
  components: {
    BlockUI,
    PreviewComponent,
  },
  mounted(){
    // Fetching data from api and pass to tree structure
    this.loader.display = false
    setTimeout(() => {
      this.loader.display = false
    }, 3000);
  },
  methods:{
    cancelled(){
      this.loader.display = false
    },
    loading(){
      this.loader.display = true
      setTimeout(() => {
        this.loader.display = false
      }, 5000);
    }
  }
}
</script>
<style scoped>
.container{
    padding-bottom:300px;
    background:#FFF;
    padding-top: 10px;
    padding: 20px 30px;
    border-top: 3px solid rgb(6, 155, 18) 
  }
</style>
