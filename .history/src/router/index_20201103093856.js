import Vue from 'vue'
import Router from 'vue-router'
import path from 'path'
Vue.use(Router)
const MY_ROUTERS = require.context('./modules/', false, /\.js$/)
console.log(MY_ROUTERS)
export default new Router({
  routes: [{

  }]
})