import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const MY_ROUTERS = require.context('./modules/', true, /\.js$/)
console.log(MY_ROUTERS)
export default new Router({
  routes: [{

  }]
})