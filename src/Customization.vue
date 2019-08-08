<template>
  <div>
    <ErrorLayout v-if="errors.length">
      <span slot="title">
        {{errors}}
      </span>
    </ErrorLayout>
    <CustomizationLayout v-else-if="tree.length"/>
  </div>
  
</template>

<script>

// import dependencies
import CustomizationLayout from './components/layout/CustomizationLayout.vue'
import ErrorLayout from './components/layout/ErrorLayout.vue'
import store from './store'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Customization',
  store,
  props:{
    token         : { type: String, required: true },
    template_id   : { type: String, required: true },
    assignment_id : { type: String, required: true }
  },
  components: {
    CustomizationLayout,
    ErrorLayout
  },
  computed: mapState({
    tree: state => state.template.tree,
    errors: state => state.template.errors
  }),

  // methods: mapActions(
  //   'template', // module name
  //   [ 'getTreeData' ] // action methods
  // ),

  created () {
    this.$store.dispatch('auth/setToken',this.token);
    
    this.$store.dispatch('template/getTreeData',{
      template_id:this.template_id,
      assignment_id: this.assignment_id
    })
  }
}
</script>
