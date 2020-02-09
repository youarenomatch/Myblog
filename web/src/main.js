import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import '@/assets/css/iconfont.css'
import '@/assets/css/Style.css'
import './icons'

Vue.config.productionTip = false
// import less from 'less'
// Vue.use(less)

// import Icon from 'vue-svg-icon/Icon'
// Vue.component("icon",Icon)

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import axios from 'axios'
Vue.prototype.$http=axios.create({
  baseURL:'http://localhost:3000/web/api'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
