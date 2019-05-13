import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/bootstrap.min.css'
// import './../public/static/joguinho-motor/jogadores.js' 
// import './../public/static/joguinho-motor/joguinho.js'


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
 


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
