import Vue from 'vue'
import Customization from './Customization.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(Customization)
}).$mount('#app')

// import Vue from 'vue';
// import wrap from '@vue/web-component-wrapper';

// import App from './App.vue'
// const previewComponent = wrap(Vue, App);

// window.customElements.define('preview-component', previewComponent);
