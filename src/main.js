import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import BigNumber from 'bignumber.js'
// import echarts from 'echarts'
import * as echarts from 'echarts';
import lottie from 'vue-lottie';
//console.log('localStorage',localStorage)
localStorage.clear()
Vue.component('lottie', lottie)
// echarts
Vue.prototype.$echarts = echarts


//混入
import './plugins/mixin'
// 点击复制
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 多语言
import i18n from './plugins/i18n'

// ui框架   antd for vue
import './plugins/antd'

import 'ant-design-vue/dist/antd.css';

import '@/styles/fonts.css'

Vue.prototype.$cookie = Cookies
Vue.prototype.$BigNumber = BigNumber
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
