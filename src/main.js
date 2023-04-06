import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL='https://xuezi.xin88.top/'
Vue.use(VueAxios,axios)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
