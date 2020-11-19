import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

;(async() => {
  await import('./router/before') // permission control
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
})()
