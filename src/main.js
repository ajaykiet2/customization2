import Vue from 'vue'
import Customization from './Customization.vue'

Vue.config.productionTip = false
const target = document.querySelector('#app');
new Vue({
  render: createElement => {
    const context = {
      props: { ...target.dataset },
    };
    return createElement(Customization, context);
  }
}).$mount('#app')
