import Vue from 'vue'
import App from './App.vue'
import HeaderPrincipal from './components/HeaderPrincipal.vue'


Vue.config.productionTip = false
Vue.component('HeaderPrincipal', HeaderPrincipal)

new Vue({
  render: h => h(App),
}).$mount('#app')
