import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './registerServiceWorker'
import 'vue-material-design-icons/styles.css'

Vue.prototype.$isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
