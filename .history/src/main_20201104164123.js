import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

;(async() => {
  await initI18n()
  const router = await import('./router/index.js')
  const store = await import('./store/index.js')
  await import('./errorLog') // error log
  await import('./router/before') // permission control
  new Vue({
    el: '#app',
    router: router.default,
    store: store.default,
    i18n,
    components: { App },
    template: '<App/>',
  })
})()
