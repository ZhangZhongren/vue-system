import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const MY_ROUTERS = require.context('./modules', true, /\.js$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

console.log(requireAll(MY_ROUTERS))

export default new Router({
  routes: []
})