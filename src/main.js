import Vue from 'vue';
import App from './App.vue';
import titleMixin from './mixins/titleMixin';


Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
