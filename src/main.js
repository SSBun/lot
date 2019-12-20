import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(axios)

Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
