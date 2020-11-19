import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
import './directive/index'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'mini', // set element-ui default size
})

;(async() => {
  await import('./router/before') // permission control
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
})()
