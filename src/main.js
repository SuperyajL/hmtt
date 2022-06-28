import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/index.less'
import ToutiaoIcon from '@/components/ToutiaoIcon'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  ToutiaoIcon,
  render: h => h(App)
}).$mount('#app')
