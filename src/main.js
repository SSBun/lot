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


axios.defaults.baseURL = 'https://7zw6tqbd.lc-cn-n1-shared.com';
axios.defaults.headers.common['X-LC-Id'] = '7zw6tQBddCfPvbaVtBGxUy0G-gzGzoHsz'
axios.defaults.headers.common['X-LC-Key'] = 'voPGHhBz7MozpUm0Fq2AMFmv'

Vue.prototype.$axios = axios

export default new Vue({
  render: h => h(App),
}).$mount('#app')
